'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'movies', 
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        trailer: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        start_date: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        end_date: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        banner: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sessions: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies')
  }
};
