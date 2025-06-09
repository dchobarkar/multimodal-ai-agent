import { encoding_for_model } from "gpt-tokenizer";

const encoder = encoding_for_model("gpt-4o");

export const countTokens = (text: string): number => {
  return encoder.encode(text).length;
};
