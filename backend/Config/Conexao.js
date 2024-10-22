// import mysql from 'mysql'

const mysql = require ('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mepaga'
});

connection.connect((err) => {
    if (err){
        console.error('Erro ao realizar conexção com o BD:', err);
        throw err;
    }

    console.log('Conexão com o BD estabelecida com sucesso!');

});

module.exports = connection;
// export default connection;