import express from "express";
import foodRoute from "./route/foodRoute.js";

const server = express();
const PORT = 3000;

server.use(express.json());

server.use("/", foodRoute);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
