const { ValidationError } = require("yup");
const { addGameValidator } = require("../validators/game.validators");
const formErrorsResponse = require("../responses/formerrors.response");
const createResponse = require("../responses/response");
const { GameModel } = require("../models/init");


const addGame = async (request , response) => {
    try{
        const validData = await addGameValidator.validate(request.body,{abortEarly : false});
        console.log(request.body,`request body`);
        const newGameObj = { ...validData, isOver: false, isLive: false };
        const game = await GameModel.create(newGameObj);
        response.json(createResponse("game", "create", game.toJSON()));
  
    } catch(e){
        if(e instanceof ValidationError){
            return response.status(400).json(formErrorsResponse(e));
        }
        throw e;
    }
}

module.exports = {addGame}