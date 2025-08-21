import userEntity from "../entities/userEntity.js";
import userRepository from "../repository/userRepository.js";

export default class userController {

  #repo;

  constructor(){
    this.#repo = new userRepository();
  }

  list(req, res) {
    try {
      
      let userList = this.#repo.list();
      if (userList.length > 0) {
        return res.status(200).json(userList);
      } else {
        return res.status(404).json({ msg: "Nenhum usuario foi encontrado" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  addNewUser(req, res) {
    try {
      let {name, email } = req.body;
      if (name && email) {
        let id = Date.now();
        let userEnt = new userEntity(id, name, email);
        let insert = this.#repo.addNewUser(userEnt);
        if (insert == true) {
          return res.status(200).json({ msg: "Novo usuario cadastrado" });
        } else {
          throw new Error("Nao foi possivel persistir os dados");
        }
      } else {
        return res
          .status(400)
          .json({ msg: "Um usuario precissa ter nome, email e id validos!" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Nao foi possivel cadastrar" });
    }
  }

  deleteUser(req, res) {
    try {
      let { id } = req.params;
      if (this.#repo.searchId(id)) {
        this.#repo.deleteUser(id);
        return res.status(200).json({ msg: "Usuario excluido." });
      } else {
        return res.status(400).json({ msg: "Esse usuario nao existe" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error.message });
    }
  }

  updateUser(req, res) {
    try {
      let { id, name, email } = req.body;
      if(id && name && email){
        if(this.#repo.searchId(id)){
            /*
                Cria uma nova entidade para sobrescrever
                os dados da antiga
            */
            let userEnt = new userEntity(id, name, email) 
            this.#repo.updateUser(userEnt);
            return res.status(200).json({msg: "Dados do usuario atualizado com sucesso"})
        }else{
            return res.status(404).json({msg: "Esse usuario nao existe"})
        }
      }else{
        return res.status(400).json({msg: "As informacoes nao estao corretas"})
      }
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: error.message});
    }
  }
}
