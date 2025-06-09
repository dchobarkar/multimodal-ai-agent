import { Worker } from "bullmq";

import { getAgentById } from "../services/agentRegistry";
import { logger } from "../utils/logger";

const worker = new Worker(
  "chat-messages",
  async (job) => {
    const { agentId, sessionId, userMessage } = job.data;
    const agent = getAgentById(agentId);
    if (!agent) throw new Error(`Agent not found: ${agentId}`);
    await agent.processMessage(userMessage, sessionId);
  },
  {
    connection: { url: process.env.REDIS_URL! },
    concurrency: 5,
  }
);

worker.on("completed", (job) => logger.info(`✅ Job ${job.id} done`));
worker.on("failed", (job, err) =>
  logger.error(`❌ Job ${job?.id} failed`, err)
);
