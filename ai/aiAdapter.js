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
    const message = createContent(data);
    console.log(message);
    const chatResponse = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [{ role: "user", content: message }],
    });
  
    return chatResponse.choices[0].message.content;
};

const createContent = (data) => {
    const content = getPrompt(data);
    const productInfos = require("../data/product.json");
    console.log(productInfos);
    return content + data.question + " ####### use the following information to answer the question : list of ingredients " + productInfos.c_OCC_inci.default + " Description du produit " + productInfos.c_OCC_CallCenterDescription.default;
};

const getPrompt = (data) => {
    if(data.tribe == "luxury") {
        return "";
    }
    return "You are a virtual beauty agent. Your task is to answer in less than 200 words to the following customer question : ";
}