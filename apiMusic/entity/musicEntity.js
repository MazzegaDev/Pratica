export default class musicEntity {
  #name;
  #artist;
  #genre;
  #id;

  constructor(name, artist, genre, id) {
    this.#name = name;
    this.#artist = artist;
    this.#genre = genre;
    this.#id = id;
  }

  get name() {
    return this.#name;
  }

  get id() {
    return this.#id;
  }

  get artist() {
    return this.#artist;
  }

  get genre() {
    return this.#genre;
  }

  toJSON() {
    return {
      name: this.#name,
      artist: this.#artist,
      genre: this.#genre,
      id: this.#id,
    };
  }
}
