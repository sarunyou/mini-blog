var jwt = require('jsonwebtoken');
const createError = require('http-errors')
const userService = require('./user.service')

var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
const singInUser = async (name, password) => {
    const user = await userService.getUserByName(name);
    if (!user || !(await user.validPassword(password))) {
        throw new createError.Unauthorized("Incorrect password");
    }
    return user;
};


module.exports = {
    singInUser
}