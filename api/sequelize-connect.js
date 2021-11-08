const Sequelize = require("sequelize");

const {
  userModel,
  categoryModel,
  itemModel,
  cartItemModel,
} = require("./models/models");

const connection = new Sequelize("db", "user", "pass", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./database/db.sqlite",
});

const User = connection.define("User", userModel);
const Item = connection.define("Item", itemModel);
const Category = connection.define("Category", categoryModel);
const CartItem = connection.define("Cart Item", cartItemModel);

Item.belongsTo(Category);
Category.hasMany(Item);
CartItem.belongsTo(User);
CartItem.belongsTo(Item);
User.hasMany(CartItem);

module.exports = { connection, User, Item, Category, CartItem };
