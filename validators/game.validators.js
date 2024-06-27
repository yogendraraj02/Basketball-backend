
const yup = require("yup");

const addGameValidator = yup.object({
    hometeam: yup.string().required().min(5).max(30),
    awayteam: yup.string().required().min(5).max(30),
    gametime: yup.string().required().min(5).max(50),
    
  });


  module.exports = {addGameValidator}