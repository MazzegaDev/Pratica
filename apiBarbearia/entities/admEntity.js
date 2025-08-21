export default class AdmEntity {
  #id;
  #nome;
  #email;

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.email;
  }

  constructor(id, nome, email) {
    this.#id = id;
    this.#nome = nome;
    this.#email = email;
  }

  toJSON() {
    return {
      id: this.#id,
      nome: this.#nome,
      email: this.#email,
    };
  }
}
