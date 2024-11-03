const expres = require("express");
const router = expres.Router();
const whatsappController = require("../controllers/whatsappControllers");

router
.get("/",whatsappController.verifyToken)
.post("/",whatsappController.receiveMessage)

module.exports = router;