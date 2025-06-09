import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 30;

export async function rateLimiter(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "local";

  const now = Date.now();
  const data = rateLimitMap.get(ip);

  if (!data || now - data.timestamp > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return null;
  }

  if (data.count >= MAX_REQUESTS) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  data.count++;
  rateLimitMap.set(ip, data);
  return null;
}
