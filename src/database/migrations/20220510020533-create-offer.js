'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expiresIn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      paymentStatusSponsor: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1)
      },
      paymentStatusProvider: {
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
      },
      orderId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'orders',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      sponsorId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'sponsors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    }, {
      charset: 'latin1'
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('offers');
  }
};