// Import the path module
const path = require('path');
// Import the express module
const express = require('express');
// Import the userController module
const userform = require('../controllers/userController')

// Create a router object using express
const router = express.Router();

// Define a GET route for the get-users path and use the getAddUser controller function
router.get('/get-users', userform.getAddUser);
// Define a POST route for the add-user path and use the postAddUser controller function
router.post('/add-user', userform.postAddUser);
// Define a GET route for the edit-user path with a dynamic user id parameter and use the editUser controller function
router.get('/edit-user/:userId', userform.editUser);
// Define a POST route for the update-user path and use the updateUser controller function
router.post('/update-user', userform.updateUser);
// Define a POST route for the delete-user path and use the deleteUser controller function
router.post('/delete-user', userform.deleteUser);

// Export the router object for other modules to use
module.exports = router;
