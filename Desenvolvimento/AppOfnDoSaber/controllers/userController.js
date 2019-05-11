var UserModel = require('../models/userModel');

// Display detail page for a specific User.
exports.user_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};

// Display User create form on GET.
exports.user_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: User create GET');
};

// Handle User create on POST.
exports.user_create_post = function (req, res, next) {
    console.log('teste user_create_post');
    // Create an instance of model SomeModel
    var my_user = new UserModel(req.body.userName, req.body.email1, req.body.password1);
    req.app.locals.dBObject.insertOne('ofnSaberDb', 'users', my_user);

    console.error(my_user);
    
    //res.send('NOT IMPLEMENTED: User create POST');
    next();
};

// Display User update form on GET.
exports.user_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: User update GET');
};

// Handle User update on POST.
exports.user_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
};