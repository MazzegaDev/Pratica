import foodController from "../controller/foodController.js";
import express from "express";

const foodCTRL = new foodController();
const router = express.Router();

router.get("/food",foodCTRL.listar);
router.post("/food",foodCTRL.add);
router.delete("/:id",foodCTRL.delete);

export default router;