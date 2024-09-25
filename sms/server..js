const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // CommonJS require

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/send-alert', async (req, res) => {
    const { message, phone_number } = req.body;

    const apiKey = 'ZQW1beRZNFcJYFWCRnXk9ma9bEhA2p65bQUY0hemwipII1sZDHxuLpHjffKzcF4x8YzQc04IBZaqB++na2AHIw==';
    const customerId = '4B9822BA-C024-461A-A883-26B49ADE40A5';

    try {
        const response = await fetch('https://rest-api.telesign.com/v1/message', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(customerId + ':' + apiKey).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                message,
                phone_number,
                message_type: 'ARN'
            })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ error: 'Failed to send SMS' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
