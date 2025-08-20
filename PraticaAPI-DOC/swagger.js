import swaggerAutogen from "swagger-autogen";

const docs = {
  host: "localhost:3000",
  info: {
    tittle: "PraticaApi-DOC",
    description: "Praticando API REST e documentacao",
  },
};
const route = ["./server.js"]
const outputJson = "./swaggerOutput.json";
swaggerAutogen({openapi: '3.0.0'})(outputJson, route, docs);