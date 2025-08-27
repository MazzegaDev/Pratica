export default class OrderEntity {
  #clientName;
  #order;
  #quantity;
  #tableN;
  #id;
  #price;

  get clientName() {
    return this.#clientName;
  }
  get order() {
    return this.#order;
  }
  get quantity() {
    return this.#quantity;
  }

  get tableN(){
    return this.#tableN;
  }

  get id() {
    return this.#id;
  }
  get price() {
    return this.#price;
  }

  constructor(clientName, order, quantity, tableN, id, price) {
    this.#clientName = clientName;
    this.#order = order;
    this.#quantity = quantity;
    this.#tableN = tableN;
    this.#id = id;
    this.#price = price;
  }

  toJSON(){
    return{
        clientName: this.clientName,
        order: this.#order,
        quantity: this.quantity,
        tableN: this.#tableN,
        id: this.#id,
        price: this.#price,
    }
  }
}
