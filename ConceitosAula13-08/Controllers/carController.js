import carEntity from "../Entities/carEntity.js";
import carRepository from "../Repositories/carRepository.js";

export default class carController {
  list(req, res) {
    try {
      let carRepo = new carRepository();
      let listCar = carRepo.list();
      if (listCar.length > 0) {
        return res.status(200).json(listCar);
      } else {
        return res.status(404).json({ msg: "Nenhum carro para listar !" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Erro ao processar a requisicao" });
    }
  }

  add(req, res) {
    try {
      let { color, brand, owner } = req.body;
      if (color && brand && owner) {
        let carEnty = new carEntity(color, brand, owner);
        let carRepo = new carRepository();
        let insertBool = carRepo.add(carEnty);
        if (insertBool == true) {
          return res.status(200).json({ msg: "Carro cadastrado no banco" });
        } else {
          throw new Error(
            "Erro ao cadastrar usuario. Nao foi possivel persistir esses dados no banco de dados :("
          );
        }
      } else {
        return res
          .status(400)
          .json({ msg: "O carro precisa ter cor, marca e dono definidos!" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Nao foi possivel cadastrar" });
    }
  }

  delete(req, res) {
    try {
      let { owner } = req.params;
      let carRepo = new carRepository();
      if(carRepo.searchOwner(owner)){
        carRepo.delete(owner)
        return res.status(200).json({msg: "Deletado com sucesso"})
      }else{
        return res.status(400).json({msg: "Dado nao existe para poder deletar"})
      }
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: error})
    }
  }
}
