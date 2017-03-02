// this file is generated after sequelize model:create comand
// add relationships that wasn't added by default
'use strict';
module.exports = (sequelize, DataTypes) => {
    const TodoItem = sequelize.define('TodoItem', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                TodoItem.belongsTo(models.Todo, {
                    foreignKey: 'todoId',
                    onDelete: 'CASCADE'
                })
            }
        }
    });
    return TodoItem;
};