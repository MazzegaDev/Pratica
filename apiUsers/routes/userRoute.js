import express from "express";
import UserController from "../controller/userController.js";

const ctrl = new UserController();
const route = express.Router();

route.get("/", (req, res) => {
  // #swagger.tags = ['usuario']
  // #swagger.summary = "Lista todos os usuarios"

  /*
        #swagger.responses[404] = {
            description: "Nenhum usuario encontrado na consulta",
            schema: { $ref: '#/components/schemas/erro'}
        }
    */
  ctrl.listar(req, res);
});

route.post("/", (req, res) => {
  // #swagger.tags = ['usuario']
  // #swagger.summary = "Adiciona um novo usuario"

  /*
        #swagger.requestBody = {
            required: true,
            content: {
                applicationJson: {
                    schema: { $ref: '#/components/schemas/user'}
                }
            }
        }
    */
  ctrl.novoUsuario(req, res);
});

route.delete("/:id", (req, res) => {
  ctrl.deletar(req, res);
});

route.put("/", (req, res) => {
  ctrl.atualizarUsuario(req, res);
});

export default route;
