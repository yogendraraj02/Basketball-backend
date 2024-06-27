'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("games","userId",{
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: "users",
          schema: "public",
        },
        key: "id",
      },
      allowNull: false,
    
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("games", "games_userId_fkey")
    await queryInterface.removeColumn("games","userId");
  }
};
