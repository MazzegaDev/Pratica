import userEntity from "../entities/userEntity.js";

let userDB = [];
userDB.push(new userEntity(1, "Guilherme", "gmazzega6@gmail.com"));
userDB.push(new userEntity(2, "Gu", "gmazzega5@gmail.com"));
userDB.push(new userEntity(3, "Gui", "gmazzega4@gmail.com"));

export default class userRepository {
  list() {
    return userDB;
  }

  addNewUser(newEntity) {
    userDB.push(newEntity);
    return true;
  }

  searchId(id) {
    let userID = userDB.filter((x) => x.id == id);
    return userID.length > 0;
  }

  deleteUser(id) {
    userDB = userDB.filter((x) => x.id != id);
  }

  updateUser(updatedData) {
    userDB.forEach((x, index) => {
      if (x.id == updatedData.id) {
        userDB[index] = updatedData;
      }
    });
  }
}
