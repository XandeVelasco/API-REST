const mongoConfig = require('./configs/mongoConfig.js');

if (!mongoConfig)
  throw new Error('Unable to get database mongoConfig');

Mongoose = require('mongoose').Mongoose;
mongoose = new Mongoose();

mongoose.config = mongoConfig;
mongoose.Promise = global.Promise;
mongoose.connect(mongoConfig, { useNewUrlParser: true, useUnifiedTopology:true });

const db = mongoose.connection;

db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoConfig);
});

db.on('open', function () {
  console.log("Connected to the DataBase !!!")
});

process.on('SIGINT', function () {
  console.log("SIGINT")
  mongoose.connection.close(function () {
    process.exit(0);
  });
});

module.exports = mongoose;