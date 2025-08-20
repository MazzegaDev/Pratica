export default class userEntity {
  #id;
  #name;
  #email;

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  constructor(id, name, email) {
    this.#id = id;
    this.#name = name;
    this.#email = email;
  }

  toJSON() {
    return {
      id: this.#id,
      name: this.#name,
      email: this.#email,
    };
  }
}
