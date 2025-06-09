import fs from "fs";

const lines = fs
  .readFileSync("token-logs.json", "utf-8")
  .split("\n")
  .filter(Boolean);
const logs = lines.map((line) => JSON.parse(line));

const dailyTotal = logs.reduce((acc: Record<string, number>, log) => {
  const date = new Date(log.timestamp).toISOString().split("T")[0];
  acc[date] = (acc[date] || 0) + log.tokens;
  return acc;
}, {});

console.table(dailyTotal);
