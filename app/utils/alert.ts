import axios from "axios";

export const sendAlert = async (message: string) => {
  try {
    await axios.post(process.env.ALERT_WEBHOOK_URL!, {
      text: `[Chatbot Alert] ${message}`,
    });
  } catch (err) {
    console.error("Alert failed", err);
  }
};
