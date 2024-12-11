const { Mistral } = require("@mistralai/mistralai");
require("dotenv").config();

const apiKey = process.env.MISTRAL_API_KEY;

const callIA = async () => {
  const client = new Mistral({ apiKey: apiKey });

  const chatResponse = await client.chat.complete({
    model: "mistral-large-latest",
    messages: [{ role: "user", content: "What is the best French cheese?" }],
  });

  console.log("Chat:", chatResponse.choices[0].message.content);
};

callIA();