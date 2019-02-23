const express = require('express');
const logger = require('morgan');


const app = express();
const PORT = 3000;


app.use(logger(':date[iso]'));
app.use(logger('dev'));
app.use(logger(':user-agent'));




// Routes

app.get('/', (req, res) =>{

    /** Run the server and check it is working properly **/

    res.send("Cozyfinder server is running");

});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});