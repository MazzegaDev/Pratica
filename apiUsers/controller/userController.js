import UserEntity from "../entities/userEntity.js";
import UserRepository from "../repository/userRepository.js";
import PerfilEntity from "../entities/perfilEntity.js";

export default class UserController {
  #userRepo;
  #Erro500;
  #Erro404;
  constructor() {
    this.#userRepo = new UserRepository();
    this.#Erro500 = "Nao foi possivel processar a requisicao";
    this.#Erro404 = "Usuario nao encontrado"
  }

  async listar(req, res){
    try {
        let lista = await this.#userRepo.listar();
        if(lista.length > 0){
            return res.status(201).json(lista);
        }else{
            return res.status(404).json({msg: "Nada para exibir"})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: this.#Erro500});
    }
  }

  async novoUsuario(req, res){
    try {
        let {nome, email, perfil} = req.body;
        if(nome && email && perfil && perfil.id){
            // let id = Date.now();
            let novoUser = new UserEntity(nome, email, 0, new PerfilEntity(perfil.id));
            let inseriu = await this.#userRepo.novoUsuario(novoUser);
            if(inseriu == true){
                return res.status(200).json({msg: "Novo usuario cadastrado."})
            }else{
                throw new Error("Nao foi possivel persistir os dados.")
            }
        }else{
            //invalido
            return res.status(400).json({msg: "Nome ou email invalidos"});

        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: this.#Erro500})
    }
  }

  deletar(req, res){
    try {
        let {id} = req.params;
        if(this.#userRepo.procurarId(id)){
            this.#userRepo.deletar(id);
            return res.status(200).json({msg: "Usuario deletado"});
        }else{
            return res.status(404).json({msg: this.#Erro404});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: this.#Erro500});
    }
  }

  atualizarUsuario(req, res){
    try {
        let {nome, email, id} = req.body;
        if(nome && email && id){
            if(this.#userRepo.procurarId(id)){
                let usuarioAtualizado = new UserEntity(nome, email, id);
                this.#userRepo.atualizarUsuario(usuarioAtualizado);
                return res.status(200).json({msg: "Usuario atualizado", user: usuarioAtualizado});
            }else{
                return res.status(404).json({msg: this.#Erro404})
            }
        }else{
            return res.status(400).json({msg: "Nome, email ou id nao e valido"})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: this.#Erro500});
    }
  }

}
