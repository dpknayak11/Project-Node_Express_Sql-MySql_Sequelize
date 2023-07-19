// Import the User model
const User = require('../module/user')

// Define a controller function to render the form view with all users
exports.getAddUser = (req, res, next) => {
    // Find all users from the database using Sequelize
    User.findAll()
        .then(user => {
            // Render the form view with the user data, page title, path and edit mode
            res.render('form', {
                users: user,
                pageTitle: 'All User List',
                path: '/get-users',
                isEdit: '',
            });
        })
        .catch(err => console.log(err)) // Handle any errors
};

// Define a controller function to handle the form submission and create a new user
exports.postAddUser = (req, res, next) => {
    // Get the name, number and email from the request body
    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;
    // Create a new user using Sequelize
    User.create({
        name: name,
        number: number,
        email: email,
    })
        .then(result => {
            console.log('Add New User');
            // Redirect to the get-users route
            res.redirect('/get-users');
        })
        .catch(err => console.log(err)); // Handle any errors
};

// Define a controller function to render the edit-user view with the selected user data
exports.editUser = (req, res, next) => {
    // Get the edit mode and user id from the query parameters
    const isEditMode = req.query.isEditing;
    const userId = req.params.userId;
    // Find the user by id using Sequelize
    User.findAll({ where: { id: userId } })
        .then(userdata => {
            // Get the first element of the userdata array
            const user = userdata[0];
            // Render the edit-user view with the user data, page title, path and edit mode
            res.render('edit-user', {
                pageTitle: 'Editing user',
                path: '',
                isEdit: isEditMode,
                users: user
            })
        })
        .catch(err => console.log(err)) // Handle any errors
}

// Define a controller function to handle the form submission and update an existing user
exports.updateUser = (req, res, next) => {
    // Get the user id, name, number and email from the request body
    const userId = req.body.userId
    const modifiedName = req.body.name;
    const modifiedNumber = req.body.number;
    const modifiedEmail = req.body.email;

    // Find the user by id using Sequelize
    User.findByPk(userId)
        .then(user => {
            // Update the user properties with the modified values
            user.name = modifiedName;
            user.number = modifiedNumber;
            user.email = modifiedEmail;
            // Save the updated user to the database using Sequelize
            return user.save();
        }).then(result => {
            console.log(" updated data");
            // Redirect to the get-users route
            res.redirect('/get-users')

        })
        .catch(err => console.log(err)) // Handle any errors
}

// Define a controller function to handle the delete button and delete an existing user
exports.deleteUser = (req, res, next) => {
    // Get the user id from the request body
    const userId = req.body.userId;
    // Find the user by id using Sequelize
    User.findByPk(userId)
        .then(user => {
            // Delete the user from the database using Sequelize
            return user.destroy();
        }).then(result => {
            // Redirect to the get-users route
            res.redirect('/get-users');

        })
        .catch(err => console.log(err)) // Handle any errors
}
