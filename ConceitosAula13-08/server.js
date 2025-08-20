import express from "express";
import carRouter from "./Routers/carRoutes.js"
const PORT = 3000;
const server = express();

server.use(express.json());

server.use("/car", carRouter);


server.listen(PORT, () => {
  console.log(`Server on: http://localhost:${PORT}`);
});
