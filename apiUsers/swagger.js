import swaggerAutogen from "swagger-autogen";

const docs = {
  url: "http://localhost:3000",
  info: {
    title: "api",
    description: "api",
  },
  components: {
    schemas: {
      erro: {
        msg: "Ocorreu um erro",
      },
      user: {
        nome: "João",
        email: "joao@email.com",
        perfil: { id: 1 },
      },
    },
  },
};

const route = ["./server.js"];
const outputJson = "./swaggerOutput.json";

swaggerAutogen({ openapi: "3.0.0" })(outputJson, route, docs).then(async () => {
  await import("./server.js");
});
