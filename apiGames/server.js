import express from "express";
import gameRoute from "./routes/gameRoutes.js"

const server = express();
server.use(express.json());
server.use("/games", gameRoute);


const port = 3000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
