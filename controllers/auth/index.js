const localStrategy = require('./straregies/local');
const fbStrategy = require('./straregies/fb');


const strategies = {
    local: localStrategy,
    fb: fbStrategy
};


module.exports = { strategies };