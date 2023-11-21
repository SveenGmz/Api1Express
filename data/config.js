const mysql = require('mysql');

//Set database connection credentials
const config = {
    host: '127.0.0.1',
    user: 'iram',
    password: 'CacatuaF456',
    database: 'prueba',
};

//Create a MySQL pool
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;
