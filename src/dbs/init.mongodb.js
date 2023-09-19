const mongoose = require("mongoose");


class Database {
  static instance;
  constructor() {
    this.connect();
  }

  connect() {
    const connectUrl = "mongodb://127.0.0.1:27017/myapp";
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    mongoose
      .connect(connectUrl, options)
      .then(() => {
        console.log("Connected to MongoDB Success!!");
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;