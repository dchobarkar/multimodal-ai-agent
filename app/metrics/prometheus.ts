import client from "prom-client";

client.collectDefaultMetrics();

export const messageCounter = new client.Counter({
  name: "chatbot_messages_total",
  help: "Total number of messages handled",
});

export const tokenUsageGauge = new client.Gauge({
  name: "chatbot_tokens_used",
  help: "Estimated total tokens used",
});

export async function metricsHandler(): Promise<string> {
  return await client.register.metrics();
}
