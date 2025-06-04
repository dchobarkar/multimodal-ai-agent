import { ChatCompletionRequestMessage } from "openai";

export interface Agent {
  id: string;
  label: string;
  systemPrompt: string;
  processMessage(userMessage: string, sessionId: string): Promise<string>;
}
