const { ValidationError } = require("yup");
const { addGameValidator } = require("../validators/game.validators");
const formErrorsResponse = require("../responses/formerrors.response");
const createResponse = require("../responses/response");


const addGame = async (request , response) => {
    try{
        const {hometeam, awayteam, gametime} = await addGameValidator.validate(request.body,{abortEarly : false});
        console.log(request.body,`request body`);
        return response.json(createResponse("game","create",request.body))
    } catch(e){
        if(e instanceof ValidationError){
            return response.status(400).json(formErrorsResponse(e));
        }
        throw e;
    }
}

module.exports = {addGame}