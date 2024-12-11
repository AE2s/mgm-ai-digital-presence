const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes.js');
const { computeData } = require('./models/models.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

    app.post('/test', async (req, res) => {
        res.json(await computeData(req.body));
    } );

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});