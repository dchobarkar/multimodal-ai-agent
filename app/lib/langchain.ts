import { ChatOpenAI } from "langchain/chat_models/openai";

export const chatModel = new ChatOpenAI({
  temperature: 0.7,
  modelName: process.env.NEXT_PUBLIC_OPENAI_MODEL,
});
