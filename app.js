//require package and set port
const express = require('express');
const port = 3002;

//para permitir manejo de POST y PUT  
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

//Usar NodeJs bodyparsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

//Iniciar el servidor
const server = app.listen(port, (error) => {
    if (error) return console.log('Error: ${error}');
    console.log('cEl servidor escucha en el puerto ${server.address().port()');
});