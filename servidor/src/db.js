const mysql = require('mysql')
const {promisify} = require('util')
const { database } = require('./keys')

const pool = mysql.createPool(database); 

pool.getConnection( (err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOLL CONNECTION LOST') {
            console.error('La coneccion se a perdido'); 
        }
        if (err.code === 'ER CON COUNT ERROR') { 
            console.error('existen demasiadas conecciones'); 
        } 
        if (err.code === 'ENCONNREFUSED') { 
            console.error('Coneccion rechazada');
        }
    }

    if (connection) 
        connection.release()

    console.log('Çonectado a la base de datos')
});

pool.query = promisify(pool.query);

module.exports = pool
