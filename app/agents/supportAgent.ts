import { askOpenAI } from "../services/openai.service";
import { Agent } from "../types/Agent";

// TODO: Integrate memory later (fetchSimilarMessages, storeMessage)

export const supportAgent: Agent = {
  id: "support",
  label: "Support Bot",
  systemPrompt: "You are a helpful support assistant.",

  async processMessage(userMessage, sessionId) {
    const messages = [
      { role: "system", content: this.systemPrompt },
      { role: "user", content: userMessage },
    ];
    return await askOpenAI(messages);
  },
};
