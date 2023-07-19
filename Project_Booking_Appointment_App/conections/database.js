// Import the Sequelize module
const Sequelize = require('sequelize');

// Create a new Sequelize instance with the database configuration
const sequelize = new Sequelize('node-project', 'root', 'root',{
    host: "localhost",
    dialect: 'mysql'
})

// Export the sequelize instance for other modules to use
module.exports = sequelize;
