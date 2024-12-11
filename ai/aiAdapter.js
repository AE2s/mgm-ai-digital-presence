module.exports = {
    aiData : (data) => {
        return callIA(data);
    },
};

const callIA = async (data) => {
    
    const {Mistral} = require("@mistralai/mistralai");
    require("dotenv").config();

    const apiKey = process.env.MISTRAL_API_KEY;
    const client = new Mistral({ apiKey: apiKey });
  
    const chatResponse = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [{ role: "user", content: createContent(data) }],
    });
  
    return chatResponse.choices[0].message.content;
};

const createContent = (data) => {
    const content = getPrompt(data);
    return content + data.question;
};

const getPrompt = (data) => {
    if(data.tribe == "luxury") {
        return "";
    }
    return "You are a virtual beauty agent. Your task is to answer following customer question : ";
}