import mysql from "mysql2";

export default class dataBase {
  #conexao;

  get conexao() {
    return this.#conexao;
  }

  set conexao(conexao) {
    this.#conexao = conexao;
  }

  constructor() {
    this.#conexao = mysql.createPool({
      host: "127.0.0.1",
      database: "estudospfs2",
      user: "root",
      password: "",
    });
  }

  executaComando(sql, valor) {
    var cnn = this.#conexao;
    return new Promise((resolve, reject) => {
      cnn.query(sql, valor, function (error, result, field) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  executaComandoNonQuery(sql, valor) {
    var cnn = this.#conexao;
    return new Promise((resolve, reject) => {
      cnn.query(sql, valor, function (error, result, field) {
        if (error) {
          reject(error);
        } else {
          resolve(result.affectedRows > 0);
        }
      });
    });
  }

  executaComandoLastInserted(sql, valor) {
    var cnn = this.#conexao;
    return new Promise((resolve, reject) => {
      cnn.query(sql, valor, function (error, result, field) {
        if (error) {
          reject(error);
        } else {
          resolve(result.insertId);
        }
      });
    });
  }
}
