
const yup = require("yup");

const addGameValidator = yup.object({
    hometeam: yup.string().required(),
    awayteam: yup.string().required(),
    gametime: yup.string().required(),
    
  });


  module.exports = {addGameValidator}