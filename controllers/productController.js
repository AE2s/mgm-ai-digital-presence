const { computeData } = require('../models/models.js');

app.post('/compute', async (req, res) => {
    try {
        const result = await computeData(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});