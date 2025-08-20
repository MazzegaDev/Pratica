import express from "express";
import gameController from "../controllers/gameController.js";

let gameCTRL = new gameController();
const router = express.Router();
router.get("/", gameCTRL.list);
router.post("/", gameCTRL.addGame);
router.delete("/:id", gameCTRL.deleteGame);
export default router;
