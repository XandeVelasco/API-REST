let env = process.env.ENV || 'development';
let mongoConfig = {
    //'development': process.env.ACCOUNT,
    'development' : "mongodb+srv://heroku:74Iq3SSGNUuzD4xG@xandeletro-4to4o.mongodb.net/test?retryWrites=true&w=majority",
    'homolog': 'mongodb://localhost:27017/hml',
    'production': 'mongodb://localhost:27017/prd'
};
module.exports = mongoConfig[env];