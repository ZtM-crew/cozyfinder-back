const express = require('express');
const logger = require('morgan');
const cors = require('cors');


const apiCall = require('./routes/propertyCall');

const app = express();
const PORT = 3000;


app.use(logger(':date[iso]'));
app.use(logger('dev'));
app.use(logger(':user-agent'));
app.use(cors());
//app.use(bodyParser());
//app.use(bodyParser.xml());




// Routes

app.get('/', (req, res) =>{ res.send("Cozyfinder server is running")});

app.get('/search/:city', (req, res) => {apiCall.apiCall(req, res)});







app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
