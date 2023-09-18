const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost', // Cambia esto al host de tu base de datos
  user: 'root',
  password: 'root',
  database: 'cms',
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.message);
  } else {
    console.log('Conexión a la base de datos establecida');
  }
});

module.exports = db;

const sql = 'INSERT INTO archivos (nombre) VALUES (?)';
  db.query(sql, [originalname], (err, result) => {
    if (err) {
      console.error('Error al insertar en la base de datos: ' + err.message);
      res.status(500).send('Error interno del servidor');
    } else {
      console.log('Datos insertados correctamente');
      res.send('Archivo subido y datos insertados en la base de datos');
    }
  });


