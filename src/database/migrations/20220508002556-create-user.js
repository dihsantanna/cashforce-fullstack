'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phoneNumber: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      mobile: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      departament: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      verificationCode: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      emailChecked: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1)
      },
      cashforceAdm: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};