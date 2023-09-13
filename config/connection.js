import util from 'util';
import mysql from 'mysql2/promise';

let connection = null;

export default async function connect() {
  if (connection && connection.state !== 'disconnected') {
    return connection;
  }

  try {
    connection = await mysql.createConnection('mysql://root:@localhost:3306/veiculo');
    console.log('Conectado ao SGBD MySQL');
    return connection;
  } catch (error) {
    console.log('Ocorreu um erro ao conectar com o banco de dados', error);
    throw error;
  }
}

// Promisifying query methods after creating the connection
connect().then(connection => {
  connection.query = util.promisify(connection.query);
});

export { connect };