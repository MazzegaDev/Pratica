import AdmRepository from "../repositories/admRepository.js";
import AdmEntity from "../entities/admEntity.js";

export default class AdmController {
  listar(req, res) {
    try {
      let admRepo = new AdmRepository();
      let lista = admRepo.listar();
      if (lista.length > 0) {
        return res.status(200).json(lista);
      } else {
        return res.status(404).json({ msg: "Nenhum dado para listar" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  novoBarbeiro(req, res) {
    try {
      let { nome, email } = req.body;
      if (nome && email) {
        let id = Date.now();
        let novaEntidade = new AdmEntity(id, nome, email);
        let admRepo = new AdmRepository();
        let inseriu = admRepo.novoBarbeiro(novaEntidade);
        if (inseriu == true) {
          return res.status(200).json({ msg: "Novo usuario cadastrado" });
        } else {
          throw new Error("Nao foi possivel cadastrar no banco");
        }
      } else {
        return res
          .status(404)
          .json({ msg: "O barbeiro precisa ter nome e email validos" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error.message });
    }
  }

  deletarBarbeiro(req, res) {
    try {
      let { id } = req.params;
      let admRepo = new AdmRepository();
      if (admRepo.procurarId(id)) {
        admRepo.deletarBarbeiro(id);
        return res.status(200).json({ msg: "Barbeiro deletado" });
      } else {
        return res.status(400).json({ msg: "Esse ID esta invalido!" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  atualizarDados(req, res) {
    try {
      let { id, nome, email } = req.body;
      if (id && nome && email) {
        let admRepo = new AdmRepository();
        if (admRepo.procurarId(id)) {
          let entidadeAtualizada = new AdmEntity(id, nome, email);
          admRepo.atualizarDados(entidadeAtualizada);
          return res.status(200).json({ msg: "Dados atualizados" });
        } else {
          return res.status(404).json({ msg: "Nenhum barbeiro com esse ID" });
        }
      } else {
        return res
          .status(400)
          .json({ msg: "As informacoes nao estar corretas" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }
}
