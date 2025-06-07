import { ChatCompletionRequestMessage } from "openai/resources";

import { trackTokenUsage } from "../utils/tokenTracker";
import { openai } from "../lib/openai";

export const askAdaptiveModel = async (
  messages: ChatCompletionRequestMessage[],
  preferQuality = false
) => {
  const tokenEstimate = trackTokenUsage(messages);
  const model =
    tokenEstimate > 3500 && !preferQuality ? "gpt-3.5-turbo" : "gpt-4";
  const response = await openai.chat.completions.create({ model, messages });
  return response.choices[0].message?.content || "";
};
