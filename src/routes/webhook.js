const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

router.get('/', webhookController.verifyWebhook);
router.post('/', webhookController.processWebhookData);

module.exports = router;