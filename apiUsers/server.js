import express from "express";
import route from "./routes/userRoute.js"

import swaggerUi from "swagger-ui-express";
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const outputJson = require('./swaggerOutput.json')


const server = express();
server.use(express.json());
server.use(express.urlencoded({extended: true}))

server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson))
server.use("/", route)


server.listen(3000, () => {
  console.log("http://localhost:3000");
});