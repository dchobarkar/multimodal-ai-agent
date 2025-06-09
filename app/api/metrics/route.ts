import { metricsHandler } from "@/app/metrics/prometheus";

export async function GET() {
  const metrics = await metricsHandler();

  return new Response(metrics, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
