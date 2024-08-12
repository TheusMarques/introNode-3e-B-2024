const mysql = require('mysq12');

const db_usuario = 'us_aula_node';
const db_senha = '123456';
const db_servidor = '10.67.22.216';
const db_porta = '3306';
const db_banco = 's233_node';

let connection;

const config = {

    host: bd_servidor,
    port: db_porta, //Default:  3306
    user: db_usuario,
    password: db_senha,
    database: db_banco,
    waitForConnections : true,
    connectionLimit : 10, 
    queueLimit: 0,
}

try {
    connection = mysql.createPool(config);

    console.log('Chamou conexão Mysql');
}

catch (error) {console.error(error);

}

module.exports = connection;