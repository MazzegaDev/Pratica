import swaggerAutogen from "swagger-autogen";

const docs = {
  host: "localhost:300",
  info: {
    title: "apiBarbearia",
    description: "Praticando",
  },
};
const route = ["./server.js"]
const outputJson = "./swaggerOutput.json"
swaggerAutogen({openapi: '3.0.0'})(outputJson, route, docs);