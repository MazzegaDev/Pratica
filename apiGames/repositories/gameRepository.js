import gameEntity from "../entities/gameEntity.js";

let gameDB = [];

gameDB.push(new gameEntity("DayZ", "Survival, adventure, zombies", "5"));

export default class gameRepository {
  list() {
    return gameDB;
  }

  addGame(gameEntity) {
    gameDB.push(gameEntity);
    return true;
  }

  searchId(id) {
    let ID = gameDB.filter((x) => x.id == id);
    return ID.length > 0;
  }

  deleteGame(id) {
    gameDB = gameDB.filter((x) => x.id != id);
  }
}
