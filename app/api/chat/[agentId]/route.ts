import { NextRequest, NextResponse } from "next/server";

import { getAgentById } from "@/app/services/agentRegistry";
import { logger } from "@/app/utils/logger";
import { sendAlert } from "@/app/utils/alert";

export async function POST(
  req: NextRequest,
  { params }: { params: { agentId: string } }
) {
  const { message, sessionId } = await req.json();
  const agent = getAgentById(params.agentId);

  if (!agent) {
    logger.warn("Unknown agent", { agentId: params.agentId });
    return NextResponse.json({ error: "Agent not found" }, { status: 404 });
  }

  try {
    logger.info("Incoming request", {
      agentId,
      sessionId,
      userMessage: message,
    });
    const reply = await agent.processMessage(message, sessionId);
    return NextResponse.json({ reply });
  } catch (err) {
    logger.error("Agent error", { error: err.message });
    await sendAlert(`Agent ${agent.id} failed: ${err.message}`);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
