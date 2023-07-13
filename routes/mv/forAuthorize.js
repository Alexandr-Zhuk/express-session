const createError = require('http-errors');

const secureMV = (req, res, next) => {
    if(req.session.userId){
        next();
        return;
    }
    next(createError(404));
};

module.exports = secureMV;