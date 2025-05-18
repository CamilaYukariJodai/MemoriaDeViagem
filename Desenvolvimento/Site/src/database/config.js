const mysql = require('mysql2');

var mySqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

function executar(instrucao) {
  return new Promise(function (resolve, reject) {
    var conexao = mysql.createConnection(mySqlConfig);
    conexao.connect()
    conexao.query(instrucao, function (erro, resultados) {
      conexao.end()
      if (erro) {
        reject(erro)
      }
      console.log(resultados)
      resolve(resultados)
    })
    conexao.on('error', function (erro) {
      return ("ERRO no MySQL Workbench (Local): ", erro.sqlMessage)
    })
  })
}

module.exports = {executar};
