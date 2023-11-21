const sql = require('mysql')

const sqlConfig = {
  host:'localhost',
  user: 'iram',
  password: 'CacatuaF456',
  database: 'prueba',
  server: '',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

// Middleware para manejar la conexión a la base de datos
module.exports = async function(req, res, next) {
  try {
    await sql.connect(sqlConfig);
    next();
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    res.status(500).send('Error de servidor');
  }
};


//Create MySQL pool
//const pool = mysql.createPool(config);

//Export the pool
//module.exports = pool;

