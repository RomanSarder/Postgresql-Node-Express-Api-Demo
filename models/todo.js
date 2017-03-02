// this file is generated after sequelize model:create comand
// add relationships that wasn't added by default
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Todo.hasMany(models.TodoItem, {
                    foreignKey: 'todoId',
                    as: 'todoItems'
                });
            }
        }
    });
    return Todo;
};