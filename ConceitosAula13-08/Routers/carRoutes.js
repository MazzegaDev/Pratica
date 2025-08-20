import carController from "../Controllers/carController.js";
import express from "express";
const router = express.Router();

const carCTRL = new carController();
router.get("/", carCTRL.list);
router.post("/", carCTRL.add);
router.delete("/:owner", carCTRL.delete);
export default router;
