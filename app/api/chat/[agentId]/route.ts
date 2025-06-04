import { NextRequest, NextResponse } from "next/server";

import { getAgentById } from "@/app/services/agentRegistry";

export async function POST(
  req: NextRequest,
  { params }: { params: { agentId: string } }
) {
  const { message, sessionId } = await req.json();
  const agent = getAgentById(params.agentId);

  if (!agent) {
    return NextResponse.json({ error: "Agent not found" }, { status: 404 });
  }

  try {
    const reply = await agent.processMessage(message, sessionId);
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
