import swaggerAutogen from "swagger-autogen";

const docs = {
  host: "localhost:3000",
  info: {
    title: "api",
    desription: "api orders",
  },
  components: {
    schemas: {
      error: {
        msg: "Ocorreu um erro",
      },
      oder: {
        clientName: "Guilherme",
        order: "Pizza",
        quantity: 1,
        tableN: 3,
        id: 312,
        price: 60,
      },
    },
  },
};

const route = ['./server.js'];
const outputJson = './swaggerOutput.json';
swaggerAutogen({openapi: "3.0.0"})(outputJson,route, docs).then(async () => {
    await import("./server.js")
})