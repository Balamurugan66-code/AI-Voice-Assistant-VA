import axios from "axios";

const geminiResponse = async (command, assistantName, userName) => {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `You are ${assistantName}, a smart AI voice assistant created by Bala (ambicious developer). Answer clearly, naturally and briefly.`,
          },
          {
            role: "user",
            content: command,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const text =
      response.data.choices?.[0]?.message?.content ||
      "Sorry, I couldn't respond.";

    return JSON.stringify({
      type: "general",
      userInput: command,
      response: text,
    });
  } catch (error) {
    console.error("Groq API error:", error.response?.data || error.message);

    return JSON.stringify({
      type: "general",
      userInput: command,
      response: "There was a problem connecting to my brain. Try again later.",
    });
  }
};

export default geminiResponse;
