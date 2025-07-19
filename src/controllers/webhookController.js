module.exports = {
    verifyWebhook: (req, res) => {
        // Logic to verify the webhook
        const token = req.query.token; // Example token verification
        if (token === process.env.WEBHOOK_TOKEN) {
            return res.status(200).send('Webhook verified');
        }
        return res.status(403).send('Forbidden');
    },

    processWebhookData: (req, res) => {
        // Logic to process incoming webhook data
        const data = req.body;
        console.log('Received webhook data:', data);
        // Process the data as needed
        return res.status(200).send('Data received');
    }
};