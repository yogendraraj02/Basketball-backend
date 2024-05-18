const { register } = require("../controllers/user.controller");
const { validate, registerSchema } = require("../validations/user.validations");

const router = require("express").Router();

router.post("/",validate(registerSchema), register);

module.exports = router;
