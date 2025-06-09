import { NextRequest, NextResponse } from "next/server";

import { rateLimiter } from "@/app/middleware/rateLimiter";
import { askOpenAI } from "@/app/services/openai.service";

export async function POST(req: NextRequest) {
  const rateLimit = await rateLimiter(req);
  if (rateLimit) return rateLimit;

  const { messages } = await req.json();
  const answer = await askOpenAI(messages);

  return NextResponse.json({ answer });
}
