import foodEntity from "../entities/foodEntity.js";

let foodDB = [];
foodDB.push(new foodEntity("Lasanha", "Italia", 33));

export default class foodRepository {
  listar() {
    return foodDB;
  }

  procurarId(id) {
    let foodID = foodDB.filter((x) => x.id == id);
    return foodID.length > 0;
  }

  adicionarFood(foodEnt) {
    foodDB.push(foodEnt);
    return true;
  }

  removerFood(id) {
    foodDB = foodDB.filter((x) => x.id != id);
  }
}
