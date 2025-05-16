const mysql = require('mysql2');

const mySqlConfig = ({
  host: "localhost",
  database: "viagemlog",
  user: "root",
  password: "Camiyj10!"
})

function executar(instrucao) {
  return new Promise(function (resolve, reject) {
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
