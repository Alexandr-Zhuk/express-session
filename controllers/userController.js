const userModel = require('../models/users');

const getOneUser = async(email) => {
   return await userModel.findOne({email: email});
};

const addUserLocal = async(email, password) => {
    return await userModel.create({
        profile: {
            email: email
        },
        email: email
    });
}

module.exports.getOneUser = getOneUser;
module.exports.addUserLocal = addUserLocal;