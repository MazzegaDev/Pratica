import express from "express";
import userController from "../controller/userController.js";
const userCTRL = new userController();
const router = express.Router();

router.get("/", userCTRL.list);
router.post("/", userCTRL.addNewUser);
router.put("/", userCTRL.updateUser);
router.delete("/:id", userCTRL.deleteUser);
export default router;

