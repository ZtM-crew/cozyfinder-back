const express = require('express');
const logger = require('morgan');
const cors = require('cors');


const apiCall = require('./routes/propertyCall');

const app = express();
const L_PORT = 3000;


app.use(logger(':date[iso]'));
app.use(logger('dev'));
app.use(logger(':user-agent'));
app.use(cors());


// Routes

app.get('/', (req, res) =>{ res.send("Cozyfinder server is running")});
app.get('/search/:city', (req, res) => {apiCall.apiCall(req, res)});




app.listen(process.env.PORT || L_PORT, () => {
    console.log(`Server is running on port ${L_PORT}`)
});
