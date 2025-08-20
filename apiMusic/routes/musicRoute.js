import express from "express";
import musicController from "../controller/musicController.js";
const musicRoute = express.Router();

const musicCTRL = new musicController();

musicRoute.get("/", musicCTRL.list);
musicRoute.post("/", musicCTRL.addMusic);
musicRoute.delete("/:id", musicCTRL.delete);
export default musicRoute;
