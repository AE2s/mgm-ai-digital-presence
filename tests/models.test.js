const models = require('../models/models');

describe('models module', () => {
    test('#1 models exist', () => {
        expect(models).toBeDefined();
    });

    test('#2 models contains computeData function', () => {
        expect(models.computeData).toBeDefined();
    });
})

describe('compute data function', () => {
    test('#4 computeData return JSON object with answer property', () => {
        const response = models.computeData({productId : "TEST", question : "User's question ? ", tribe : "Edonist",});
        expect(response).toHaveProperty('answer');
    });
})
