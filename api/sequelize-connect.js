const Sequelize = require("sequelize");

const { userModel, categoryModel, itemModel } = require("./models/models");

const connection = new Sequelize("db", "user", "pass", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./database/db.sqlite",
});

const User = connection.define("User", userModel);
const Item = connection.define("Item", itemModel);
const Category = connection.define("Category", categoryModel);

Item.belongsTo(Category);
Category.hasMany(Item);

module.exports = { connection, User, Item, Category };
