import { askOpenAI } from "../services/openai.service";
import { Agent } from "../types/Agent";

export const salesAgent: Agent = {
  id: "sales",
  label: "Sales Assistant",
  systemPrompt:
    "You are a persuasive sales assistant who converts leads into customers.",

  async processMessage(userMessage, sessionId) {
    const messages = [
      { role: "system", content: this.systemPrompt },
      { role: "user", content: userMessage },
    ];
    return await askOpenAI(messages);
  },
};
