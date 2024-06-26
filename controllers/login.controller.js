const formErrorsResponse = require("../responses/formerrors.response");
const { loginValidator } = require("../validators/user.validators");
const { UserModel } = require("../models/init");
const jwt = require("jsonwebtoken");
const path = require("path");
const bcrypt = require("bcrypt");
const createResponse = require("../responses/response");
const fs = require("fs");
const {ValidationError} = require("yup");
const login = async (request,response) => {
    try{
        const {email,password} = await loginValidator.validate(request.body,{abortEarly : false});

        const user = await UserModel.findOne({ where: { email } });

        if (!user) {
          response.status(401).send("");
          return;
        }
    
        const encryptedPassword = user.password;
        const isValid = await bcrypt.compare(password, encryptedPassword);
    
        if (!isValid) {
          response.status(401).send("");
          return;
        }
        var privateKeyPath = path.join(__dirname, "..", "private.key");
        var privateKey = fs.readFileSync(privateKeyPath);
        var token = jwt.sign({ userId: user.id }, privateKey, {
          algorithm: "RS256",
          expiresIn: "4h",
        });
    
        response.json(createResponse("jwt_token", "login", { token }));
        } catch(e){
            if(e instanceof ValidationError){
                response.status(400).json(formErrorsResponse(e));
                return;
            }
            throw e;
        }
}

module.exports = {login}