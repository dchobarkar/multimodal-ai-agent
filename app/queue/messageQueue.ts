import { Queue } from "bullmq";

const connection = {
  connection: {
    url: process.env.REDIS_URL!,
  },
};

export const messageQueue = new Queue("chat-messages", connection);
