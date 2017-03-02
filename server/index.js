// two new routes
const todosController = require('./controllers').todo;
const todosItemsController = require('./controllers').todoItems;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    app.post('/api/todos', todosController.create);
    app.get('/api/todos', todosController.list);
    app.post('/api/todos/:todoId/items', todosItemsController.create)
    app.get('/api/todos/:todoId', todosController.retrieve);
};