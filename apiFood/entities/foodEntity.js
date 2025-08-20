export default class foodEntity {
  #name;
  #tpRegion;
  #id;
  constructor(name, tpRegion, id) {
    this.#name = name;
    this.#tpRegion = tpRegion;
    this.#id = id;
  }

  get name() {
    return this.#name;
  }
  get tpRegion() {
    return this.#tpRegion;
  }

  get id() {
    return this.#id;
  }

  toJSON() {
    return {
      name: this.#name,
      tpRegion: this.#tpRegion,
      id: this.#id,
    };
  }
}
