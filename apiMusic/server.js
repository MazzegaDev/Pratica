import express from "express";
import musicRoute from "./routes/musicRoute.js";
const server = express();
const PORT = 3000;

server.use(express.json());
server.use("/music", musicRoute)
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
