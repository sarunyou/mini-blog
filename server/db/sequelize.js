const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const mysql2 = require("mysql2");
// Connection Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_ROOT_PASSWORD,
  {
    dialect: "mysql",
    dialectModule: mysql2,
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_LOCAL_PORT,
    logging: false,
  }
);

const db = {};
const models = path.join(__dirname, "../models"); // path to a models' folder

fs.readdirSync(models)
  .filter(function (file) {
    return file.indexOf(".") !== 0 && file.slice(-3) === ".js";
  })
  .forEach(function (file) {
    const model = require(path.join(models, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Sequelize: All models were synchronized successfully.");
  })
  .catch((err) => {
    if (process.env.NODE_ENV !== "test") {
      console.log(err);
    }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
