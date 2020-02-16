const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.getLogin = (req, res, next) => {
    res.render('login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn
    });
}

exports.postLogin = async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne(email);

    if(user == undefined) {
        return res.redirect('/');
    }

    console.log("comparing " + password + " with " + user.password);

    const doMatch = await bcrypt.compare(password, user.password);
    console.log("doMatch = " + doMatch);

    if(doMatch) {
        req.session.isLoggedIn = true;
        req.session.user = user;
        return res.redirect('/');
    }

    res.redirect('/');

}