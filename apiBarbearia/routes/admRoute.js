import express from "express";
import AdmController from "../controllers/admController.js";
const admRoute = express.Router();
const CTRL = new AdmController();

admRoute.get("/", CTRL.listar);
admRoute.post("/", CTRL.novoBarbeiro);
admRoute.delete("/:id", CTRL.deletarBarbeiro);
admRoute.put("/", CTRL.atualizarDados);
export default admRoute;
