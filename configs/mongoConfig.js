  
let env = process.env.ENV || 'development';
let mongoConfig = {
    'development': process.env.ACCOUNT,
    'homolog': 'mongodb://localhost:27017/hml',
    'production': 'mongodb://localhost:27017/prd'
};
module.exports = mongoConfig[env];