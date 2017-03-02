// this file set ups sequelize folder structure
const path = require('path');


module.exports = {
    //app settings file
    "config": path.resolve('./server/config', 'config.json'),
    //app models
    "models-path": path.resolve('./server/models'),
    //folder containing seed data
    "seeders-path": path.resolve('./server/seeders'),
    //app migrations
    "migrations-path": path.resolve('./server/migrations')
};