const { Sequelize } = require("sequelize");
const createUserModel = require("../models/user.model");

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);
const UserModel = createUserModel(sequelize);
module.exports = { sequelize, UserModel };
