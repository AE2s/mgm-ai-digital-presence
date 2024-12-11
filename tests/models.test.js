const models = require('../models/models');

describe('models module', () => {
    test('#1 models exist', () => {
        expect(models).toBeDefined();
    });

    test('#2 models contains computeData function', () => {
        expect(models.computeData).toBeDefined();
    });

    test('#3 computeData function throw error parameter does not contains product id infos', () => {
        const notValidParameter = [1, 2, 3];
        expect(() => models.computeData(notValidParameter)).toThrow('Parameter is not valid');
    });
})
