// this file is generated after sequelize model:create comand
// add relationships that wasn't added by default
// this files are represantation of how we want our models
// to look in the database
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('Todos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Todos')
};