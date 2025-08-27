import dataBase from "../db/dataBase.js";
import PerfilEntity from "../entities/perfilEntity.js";
import UserEntity from "../entities/userEntity.js";

export default class UserRepository {
  #banco;

  constructor() {
    this.#banco = new dataBase();
  }

  async listar() {
    const sql = "select * from TB_Usuario";
    const rows = await this.#banco.executaComando(sql);
    let users = []; //Array para guardar o objeto que estamos estruturando a partir de dados crus do banco


    //Como Nosso banco retorna uma matriz precissamos percorrer ela
   for(let i =0; i<rows.length; i++){
      let row = rows[i]; // em row capturamos a linha da interacao atual do loop

      //Aqui estamos criando um objeto estruturado a partir da resposta do banco
      //Essa estruturacao acontence quando na nova instancia de UserEntity passamos como valores a linha da resposta do banco
      users.push(new UserEntity(row['usu_nome'], row['usu_email'], row['usu_id']));
   }

   return users;
  }

  async novoUsuario(novoUsuario) {
                                        //MESMA ORDEM DO COSNTRUTOR
    const sql = "insert into TB_Usuario (usu_nome, usu_email, per_id) values (?, ?, ?)";
    /*
      Como nosso usuario se relaciona com a tabela perfil precissamos atribuir o id como
      atributo desse objeto perfil para assim poder acontecer a relacao
    */
    const valor = [ novoUsuario.nome, novoUsuario.email, novoUsuario.perfil.id]; 

    const result = await this.#banco.executaComandoNonQuery(sql, valor);

    return result
  }

  async procurarId(id) {
    const sql = "select * from TB_Usuario where usu_id = ?";
    const valor = [id];

    const rows = await this.#banco.executaComando(sql, valor);

    if(rows.length > 0){
      let row = rows[0];

      const user = new UserEntity(row["usu_nome"], row["usu_email"], row["usu_id"], new PerfilEntity(row["per_id"]));

      return user;
    }

    return null;
  }

  // deletar(id) {
  //   userDB = userDB.filter((x) => x.id != id);
  // }

  // atualizarUsuario(usuarioAtualizado) {
  //   userDB.forEach((x, index) => {
  //     if (x.id == usuarioAtualizado.id) {
  //       userDB[index] = usuarioAtualizado;
  //     }
  //   });
  // }
}
