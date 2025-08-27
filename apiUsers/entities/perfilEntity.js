export default class PerfilEntity {
  #id;
  #desc;

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get desc() {
    return this.#desc;
  }

  set desc(desc) {
    this.#desc = desc;
  }

  constructor(id, desc) {
    this.#id = id;
    this.#desc = desc;
  }

  toJSON(){
    return{
        id: this.#id,
        desc: this.#desc,
    }
  }
}
