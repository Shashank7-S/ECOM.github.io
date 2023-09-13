const express = require('express');

const moongoose = require('mongoose');


const port = 7999

const db = require('./config/moongoose');
//const Counter = require('./models/counter')

const app = express()


app.use(express.urlencoded());

//route information
app.use("/", require("./routes"));


//app.use('/', require('./routes'))
app.listen(port, function(err) {
    if (err) {
        console.log(`error in setting up server`);
        return;
    }
    console.log(`server is running on port :${port}`);
});