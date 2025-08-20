import express from "express";
import userRoute from "./routes/userRoute.js";

//Swagger
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swaggerOutput.json");

const server = express();
const port = 3000;

server.use(express.json());
server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));

server.use("/", userRoute);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
//Para rodar o swagger -> node swagger.js
//Acessar a documentacao gerada -> localhost:3000/docs
