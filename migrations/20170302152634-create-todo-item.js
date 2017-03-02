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