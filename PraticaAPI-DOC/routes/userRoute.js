import express from "express";
import userController from "../controller/userController.js";
const userCTRL = new userController();
const router = express.Router();

router.get("/", (req, res) => {
    // #swagger.tags = ['usuario']
    // #swagger.summary = "Lista todos os usuarios"

    /*
        #swagger.responses[404] = {
            description: "Nenhum usuario encontrado na consulta",
            schema: { $ref: '#/components/schemas/erro' }
        }
    */


    userCTRL.list(req, res);
});

router.post("/",(req, res) => {
    // #swagger.tags = ['usuario']
    // #swagger.summary = "Cadastra um novo usuario"

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                applicationJson: {
                    schema: { $ref: '#/components/schemas/usuario' }
                }
            }
        }
    */


    userCTRL.addNewUser(req, res);
});

router.put("/", userCTRL.updateUser);

router.delete("/:id", userCTRL.deleteUser);
export default router;

