import swaggerAutogen from "swagger-autogen";

const docs = {
  host: "localhost:3000",
  info: {
    tittle: "PraticaApi-DOC",
    description: "Praticando API REST e documentacao",
  },
  components: {
    schemas: {
      erro: {
        msg: "Ocorreu um erro",
      },
      usuario: {
        name: "nome",
        email: "email",
      },
    },
  },
};
const route = ["./server.js"];
const outputJson = "./swaggerOutput.json";
swaggerAutogen({ openapi: "3.0.0" })(outputJson, route, docs).then(async () => {
  await import("./server.js");
});
