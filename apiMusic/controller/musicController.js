import musicEntity from "../entity/musicEntity.js";
import musicRepository from "../repository/musicRepository.js";

export default class musicController {
  list(req, res) {
    try {
      let musicRepo = new musicRepository();
      let musicList = musicRepo.list();
      if (musicList.length > 0) {
        return res.status(200).json(musicList);
      } else {
        return res
          .status(404)
          .json({ msg: "Nao foi possivel encontrar musicas para listar" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requsicao" });
    }
  }

  addMusic(req, res) {
    try {
      const { name, artist, genre, id } = req.body;
      if (name && artist && genre && id) {
        let musicEnti = new musicEntity(name, artist, genre, id);
        let musicRepo = new musicRepository();
        let insert = musicRepo.addMusic(musicEnti);
        if (insert == true) {
          return res.status(200).json({ msg: "Uma nova musica foi cadastrad" });
        } else {
          throw new Error("Nao foi possivel persistir os dados");
        }
      } else {
        return res.status(400).json({
          msg: "A musica deve ter um nome, artista, genero e id validos",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Nao foi possivel cadastrar" });
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      let musicRepo = new musicRepository();
      if (musicRepo.searchId(id)) {
        musicRepo.delete(id);
        return res.status(200).json({ msg: `Musica deletada com sucesso` });
      } else {
        return res
          .status(400)
          .json({ msg: `Musica nao encontrada para delecao` });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.message);
    }
  }
}
