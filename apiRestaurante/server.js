import express from "express";
import router from "./route/orderRoute.js";
import swaggerUi from "swagger-ui-express";
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swaggerOutput.json");

const server = express();



server.use(express.json());
server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));

server.use("/", router)

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
