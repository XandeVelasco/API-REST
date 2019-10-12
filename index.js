const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./connects/mongoConnect.js");
var model = require("./models/mongoModels.js");

app.listen(process.env.PORT || 3000, function () {

    console.log("Server Running On Port: ", process.env.PORT);

})

app.use('/', function (req, res) {

    console.log("teste de funcionamento");
    model.find({}).then(result => {

        res.json(result);

    })

})