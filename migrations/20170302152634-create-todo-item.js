// this file is generated after sequelize model:create comand
// add relationships that wasn't added by default
// this files are represantation of how we want our models
// to look in the database
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('TodoItems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            content: {
                type: Sequelize.STRING
            },
            complete: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            //relation with todo model
            todoId: {
                type: Sequelize.INTEGER,
                onDelete: 'Cascade',
                references: {
                    model: 'Todos',
                    key: 'id',
                    as: 'todoId'
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => queryInterface.dropTable('TodoItems')
};