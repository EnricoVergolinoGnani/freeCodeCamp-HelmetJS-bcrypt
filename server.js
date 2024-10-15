'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt')
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    /*Store hash in your db*/
    console.log(hash + "<-- ASYNC HASH");
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        /*res == true or false*/
        console.log(res + "<-- ASYNC RESULT")
    });
});

//END_ASYNC

//START_SYNC

var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash + "<-- SYNC HASH")
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result + "<-- SYNC RESULT")

//END_SYNC

// Simple Hello World!
app.get('/', (req, res) => {
    res.send('Hello World!')
})


























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
