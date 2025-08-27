import express from "express"
import OrderController from "../controller/orderController.js";
const router = express.Router();
const ctrl = new OrderController();

router.get("/", (req, res) => {
    // #swagger.tags = ['order']
    // #swagger.summary = "Lista todos os pedidos"


    /*
        #swagger.responses[404] = {
            description: "Nenhum usuario encontrado",
            schema: { $ref: '#/components/schemas/error'}
        }
    */

    ctrl.listOrder(req, res);
})

router.post("/", (req, res) => {
    // #swagger.tags = ['order']
    // #swagger.summary = "Cria um novo pedido"

    /*
        #swagger.requesteBody = {
            required: true,
            content:{
                applicationJson: {
                    schema: { $ref: '#/components/schemas/order'}
                }
            }
        }
    */
    ctrl.newOrder(req, res);
})

router.delete("/:id", (req, res) => {
    // #swagger.tags = ['order']
    // #swagger.summary = "deleta um pedido"


    ctrl.deleteOrder(req, res);
})

router.put("/", (req, res) => {
    // #swagger.tags = ['oder']
    // #swagger.summary = "Atualiza um pedido"


    ctrl.updateOrder(req, res);
})

export default router;