import gameEntity from "../entities/gameEntity.js";
import gameRepository from "../repositories/gameRepository.js";

export default class gameController {
  list(req, res) {
    try {
      let gameRepo = new gameRepository();
      let gameList = gameRepo.list();
      if (gameList.length > 0) {
        return res.status(200).json(gameList);
      } else {
        return res.status(404).json({ msg: "Nenhum game para listar" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  addGame(req, res) {
    try {
      const { name, genre, id } = req.body;
      if (name && genre && id) {
        let newGameEntity = new gameEntity(name, genre, id);
        let gameRepo = new gameRepository();
        let insert = gameRepo.addGame(newGameEntity);
        if (insert == true) {
          return res
            .status(200)
            .json({ msg: "Novo jogo cadastrado com suscesso" });
        } else {
          throw new Error(
            "Erro oa cadastrar novo jogo. Nao foi possivel persistir os dados no banco de dados"
          );
        }
      } else {
        return res
          .status(400)
          .json({ msg: "O jogo deve ter nome, genero e id definidos !" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  deleteGame(req, res){
    try {
        const {id} = req.params;
        let gameRepo = new gameRepository();
        if(gameRepo.searchId(id)){
            gameRepo.deleteGame(id);
            return res.status(200).json({msg: `Jogo com o id: ${id} foi deletado com sucesso`})
        }else{
            return res.status(400).json({msg: `O jogo com id: ${id} nao foi encontrado pra delecao`})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message)
    }
  }
}
