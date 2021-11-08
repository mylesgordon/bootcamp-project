const Sequelize = require("sequelize");
const {
  connection,
  User,
  Item,
  Category,
  Cart,
} = require("./sequelize-connect");
const express = require("express");
const app = express();
const port = 3002; //https://localhost:3002/
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sync models
async function start() {
  await connection.sync({
    logging: false, // don't log everything
    // force: true, // drop tables each time
  });
}

// run start and log any errors
start()
  .then(() => console.log("Sequelize connected"))
  .catch((e) => console.log(`Caught error: ${e}`));

app.listen(port, () => console.log(`Express server running on port ${port}`));
