const userController = require('../../userController');
const authModel = require('../../../models/auth');


const login = async(email, pass) =>{
    const data = await userController.getOneUser(email);
    
    const userAuth = await authModel.findOne({user: data.id});
    if(userAuth === null){
        return {status: 'fail', payload: {message: 'wrong e-mail or password'}};
    }
    if(userAuth.authData.email === email && userAuth.authData.password === pass){
        return {status: 'ok', payload: {userID: userAuth.user}};
    }else{
        return {status: 'fail', payload: {message: 'wrong e-mail or password'}};
    }
    
};

const registration = async(email, pass) => {
    const user = await userController.getOneUser(email);
    if(user !== null){
        return {status: 'User already'};
    }
    const userData = await userController.addUserLocal(email, pass);
   
    await authModel.create({
        strategy: 'local',
        user: userData._id,
        authData: {
            email: email,
            password: pass
        }
    });
    return await login(email, pass);
};

module.exports = {
    login,
    registration
};