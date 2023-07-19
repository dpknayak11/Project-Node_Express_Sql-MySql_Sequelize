// Import the Sequelize module
const Sequelize = require('sequelize');
// Create a new Sequelize instance with the database configuration
const sequelize = new Sequelize('node-project', 'root', 'root',{
    host: "localhost",
    dialect: 'mysql'
})
// Define the User model
const User = sequelize.define('user',{
    // Make the id property the primary key, auto-incrementing and not nullable
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    // Make the name property a string type
    name: Sequelize.STRING,
    // Make the number property a double type and not nullable
    number: { 
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    // Make the email property a string type and not nullable
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
// Export the User model for other modules to use
module.exports = User;
