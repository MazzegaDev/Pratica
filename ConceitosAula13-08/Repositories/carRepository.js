import carEntity from "../Entities/carEntity.js";

let carDB = [];
carDB.push(new carEntity("Black", "BMW", "Guilherme"));
carDB.push(new carEntity("Blue", "Volvo", "Gui"));
carDB.push(new carEntity("Red", "Ferrari", "Mazzega"));

export default class carRepository {
  searchOwner(owner) {
    let carDBs = carDB.filter((x) => x.owner == owner);
    return carDBs.length > 0;
  }

  list() {
    return carDB;
  }

  add(carEntity) {
    carDB.push(carEntity);
    return true;
  }

  delete(owner){
    carDB = carDB.filter((x) => x.owner != owner);
  }
}
