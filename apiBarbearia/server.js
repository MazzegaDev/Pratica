import express from "express";
import admRoute from "./routes/admRoute.js";
const port = 3000;
//Swagger
import swaggerUI from "swagger-ui-express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swaggerOutput.json");

const server = express();

server.use(express.json());

server.use("/docs", swaggerUI.serve, swaggerUI.setup(outputJson));

server.use("/", admRoute);

server.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
});
