export default class carEntity {
  #color;
  #brand;
  #owner;
  constructor(color, brand, owner) {
    this.#color = color;
    this.#brand = brand;
    this.#owner = owner;
  }

  get brand() {
    return this.#brand;
  }
  get color() {
    return this.#color;
  }
  get owner() {
    return this.#owner;
  }

  toJSON() {
    return {
      color: this.#color,
      brand: this.#brand,
      owner: this.#owner,
    };
  }
}
