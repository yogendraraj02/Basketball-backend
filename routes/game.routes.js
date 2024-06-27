const { addGame } = require("../controllers/game.controller");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

const router = require("express").Router();

router.post('/',authenticationMiddleware,addGame)

module.exports = router;