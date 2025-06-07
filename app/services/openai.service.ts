import { ChatCompletionRequestMessage } from "openai/resources";

import { getCachedResponse, setCachedResponse } from "./cache.service";
import { logTokenUsage } from "../utils/tokenTracker";
import { openai } from "../lib/openai";

export const askOpenAI = async (
  messages: ChatCompletionRequestMessage[],
  sessionId = "anonymous",
  agentId = "unknown"
) => {
  const promptKey = JSON.stringify(messages);
  const cached = await getCachedResponse(promptKey);
  if (cached) return cached;

  const tokenCount = logTokenUsage(sessionId, agentId, messages);

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
  });

  const reply = response.choices[0].message?.content || "";
  await setCachedResponse(promptKey, reply);
  return reply;
};
