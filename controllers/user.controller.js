const { ValidationError } = require("yup");
const { registerValidator } = require("../validators/user.validators");
const formErrorsResponse = require("../responses/formerrors.response");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/init");
const createResponse = require("../responses/response");

const register = async (request, response) => {
  try {
    console.log(`req body`,request.body);
    const userData = await registerValidator.validate(request.body, {
      abortEarly: false,
    });
    userData.password = await bcrypt.hash(userData.password, 12);
    const user = await UserModel.create(userData);
    const userObj = user.toJSON();
    delete userObj.password;
    response.status(201).json(createResponse("user", "create", userObj));
  } catch (e) {
    if (e instanceof ValidationError) {
      response.status(400).json(formErrorsResponse(e));
      return;
    }
    console.log(e,`error occured in yougendra`);
    // return response.json({mes : "invalid"});
    throw e;
  }
};

module.exports = { register };
