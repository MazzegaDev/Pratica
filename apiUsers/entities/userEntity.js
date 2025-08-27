export default class UserEntity {
  #nome;
  #email;
  #id;
  /*
    Tabela de usuarios se relacionam com a tabela de perfil,
    aqui colocomos como atributo o objeto perfil
  */
  #perfil;

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get perfil() {
    return this.#perfil;
  }

  set perfil(perfil) {
    this.#perfil = perfil;
  }

  constructor(nome, email, id, perfil) {
    this.#nome = nome;
    this.#email = email;
    this.#id = id;
    this.#perfil = perfil;
  }

  toJSON() {
    return {
      nome: this.#nome,
      email: this.#email,
      id: this.#id,
      perfil: this.#perfil,
    };
  }
}
