var cors = require('cors')
var mongoose = require('mongoose')
var express = require('express')

const contactRoute = require('./routes/contactroute');


const app = express()
const port = process.env.PORT || 3000
const contactRoute = require('./api/routes/contactroute');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(contactRoute)






app.listen(port, (error) => {
    if (!error) console.log(`Server is Successfully Running\nApp is listening to port ${port}`);
    else console.log("Error occuured, server can't start", error);
  });