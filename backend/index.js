const express = require('express');
const bodyParser = require('body-parser');
const meaningcloud = require('meaning-cloud');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const apiKey = '329904e1d3bc0a36b6c3d4f6ac33d628';

app.post('/sentiment-analysis', async (req, res) => {
    const { text } = req.body;

    try {
        const response = await meaningcloud.sentiment({
            key: apiKey,
            txt: text,
            lang: 'en'
        });



        res.json(response);




    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
