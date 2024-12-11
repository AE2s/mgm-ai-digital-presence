const models = require('../models/models');

test('#1 models exist', () => {
    expect(models).toBeDefined();
});

test('#2 models contains computeData function', () => {
    expect(models.computeData).toBeDefined();
});