import { encoding_for_model } from "gpt-tokenizer";
import fs from "fs";

const encoder = encoding_for_model("gpt-3.5-turbo");

export const trackTokenUsage = (messages: { content: string }[]) => {
  const tokens = messages.reduce(
    (sum, msg) => sum + encoder.encode(msg.content).length,
    0
  );
  return tokens;
};

export const logTokenUsage = (
  sessionId: string,
  agentId: string,
  messages: { content: string }[]
) => {
  const tokens = trackTokenUsage(messages);
  const entry = {
    timestamp: Date.now(),
    sessionId,
    agentId,
    tokens,
  };

  fs.appendFileSync("token-logs.json", JSON.stringify(entry) + "\n");
  return tokens;
};
