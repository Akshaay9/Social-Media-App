import { UsersList } from "./Data/UserData.js";
import dbConnection from "./DB.js"
import User from "./Models/User.model.js";


dbConnection()

const importData = async() => {
  try {
    await User.deleteMany()
        await User.insertMany(UsersList)
        console.log("videos and users has been successfully added");
        process.exit()
    } catch (error) {
        console.log(`${error}`);
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
  
      await User.deleteMany()
      console.log("products && user has been deleted");
      process.exit();
    } catch (error) {
      console.log(`{error}`);
      process.exit(1);
    }
};
  
if (process.argv[2] == "-d") {
    destroyData();
  } else {
    importData();
  }