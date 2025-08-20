import musicEntity from "../entity/musicEntity.js";

let musicDB = [];

musicDB.push(new musicEntity("Scent Of Blood", "M8L8TH", "NSBM, RAC", "88"));

export default class musicRepository {
  list() {
    return musicDB;
  }

  delete(id) {
    musicDB = musicDB.filter((x) => x.id != id);
  }

  searchId(id) {
    let existId = musicDB.filter((x) => x.id == id);
    return existId.length > 0;
  }

  addMusic(musicEntity) {
    musicDB.push(musicEntity);
    return true;
  }
}
