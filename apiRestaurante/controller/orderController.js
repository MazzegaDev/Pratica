import OrderEntity from "../entities/orderEntity.js";
import OrderRepository from "../repository/orderRepository.js";

export default class OrderController {
  #OrderRepo;
  constructor() {
    this.#OrderRepo = new OrderRepository();
  }

  listOrder(req, res) {
    try {
      let list = this.#OrderRepo.listOrder();
      if (list.length > 0) {
        return res.status(200).json(list);
      } else {
        return res.status(404).json({ msg: "Nada para exibir." });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(505)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  newOrder(req, res) {
    try {
      let { clientName, order, quantity, tableN, price } = req.body;
      if (clientName && order && quantity && price) {
        let id = Date.now();
        let newOrder = new OrderEntity(
          clientName,
          order,
          quantity,
          tableN,
          id,
          price,
        );
        let insert = this.#OrderRepo.newOrder(newOrder);
        if (insert == true) {
          return res.status(200).json({ msg: "Novo pedido enviado" });
        } else {
          throw new Error("Nao foi possivel persistir os dados");
        }
      } else {
        return res.status(400).json({ msg: "Alguns dados estao invalidos" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  deleteOrder(req, res) {
    try {
      let { id } = req.params;
      if (this.#OrderRepo.searchID(id)) {
        this.#OrderRepo.deleteOrder(id);
        return res.status(200).json({ msg: "Pedido deletad" });
      } else {
        return res
          .status(404)
          .json({ msg: "Nao existe nenhum pedido com esse ID" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  updateOrder(req, res) {
    try {
      let { id } = req.params;
      if (this.#OrderRepo.searchID(id)) {
        let newOrder = new OrderEntity(
          clientName,
          order,
          quantity,
          tableN,
          price,
          id
        );
        this.#OrderRepo.updateOrder(newOrder);
        return res.status(200).json({msg: "Pedido atualizado"});
      }else{
        return res.status(404).json({msg: "Pedido nao encontrado"});
      }
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Nao foi possivel processar a requisicao"})
    }
  }
}
