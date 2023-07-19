// Define a function to handle 404 errors
exports.get404 = (req, res, next) => {
    // Log a message to the console
    console.log("ERROR: 404 Page-not-found");
    // Send a 404 status code and render the 404 view
    res.status(404).render('404', { pageTitle: 'Page not Found', path: ""} )
}
