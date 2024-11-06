const expres = require("express");
const router = expres.Router();
const whatsappController = require("../controllers/whatsappControllers");
const webhookController = require("../controllers/webhookController")

router
.get("/",whatsappController.verifyToken)
.post("/",whatsappController.receiveMessage)

router.post("/webhook", webhookController.handleWebhook);

module.exports = router;