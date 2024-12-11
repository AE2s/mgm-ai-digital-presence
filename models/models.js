module.exports = {
    computeData: async (data) => {
        const tribe = data.tribe;
        const question = data.question;
        const productId = data.productId;
        const aiAdapter = require("../ai/aiAdapter");
        const answer = await aiAdapter.aiData(data);
        console.log(answer);
        return {
            answer : answer,
        }
    },
};