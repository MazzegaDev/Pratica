export default class gameEntity {
  #name;
  #genre;
  #id;
  constructor(name, genre, id) {
    this.#name = name;
    this.#genre = genre;
    this.#id = id;
  }

  get name() {
    return this.#name;
  }
  get genre() {
    return this.#genre;
  }
  get id() {
    return this.#id;
  }

  toJSON() {
    return {
      name: this.#name,
      genre: this.#genre,
      id: this.#id,
    };
  }
}
