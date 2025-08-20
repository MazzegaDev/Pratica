import foodRepository from "../repository/foodRepository.js";
import foodEntity from "../entities/foodEntity.js";

export default class foodController {
  listar(req, res) {
    try {
      let foodRepo = new foodRepository();
      let lista = foodRepo.listar();
      if (lista.length > 0) {
        return res.status(200).json(lista);
      } else {
        return res.status(404).json({ msg: "Nenhuma comida para listar!" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  add(req, res) {
    try {
      const { name, tpRegion, id } = req.body;
      if (name && tpRegion && id) {
        let foodEnt = new foodEntity(name, tpRegion, id);
        let foodRepo = new foodRepository();
        let insert = foodRepo.adicionarFood(foodEnt);
        if (insert == true) {
          return res
            .status(200)
            .json({ msg: `Food: ${name} foi inserida com sucesso` });
        } else {
          throw new Error(
            "Erro ao cadastrar food, Nao foi possivel persistir os dados"
          );
        }
      } else {
        console
          .log(400)
          .json({ msg: "A food precisa ter nome, regiao e id validos" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Nao foi possivel cadastrar" });
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      let foodRepo = new foodRepository();
      if (foodRepo.procurarId(id)) {
        foodRepo.removerFood(id);
        return res.status(200).json({ msg: "Food excluida com sucesso" });
      } else {
        return res
          .status(400)
          .json({ msg: "Nenhuma comida com esse id existe para excluir" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.message);
    }
  }
}
