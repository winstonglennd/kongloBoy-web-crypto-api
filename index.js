const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const app = express();
const port = 3000;

const apiDom = 'https://pro-api.coinmarketcap.com';
const apiKey = '8c5d2684-e428-41a0-b71b-4fa20f4445ae';

const symbols = 'RNDR,MATIC,ONDO,NEAR,GALA,MANTA,BGB'


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const result = await axios.get(apiDom + '/v2/cryptocurrency/quotes/latest' + 
        '?symbol=' + symbols, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey,
            },
        });
        res.render('index', {coins: result.data.data});
        console.log(result.data.data);
    } catch(error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
    
}) 

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})