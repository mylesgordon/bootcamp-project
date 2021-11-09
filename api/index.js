const Sequelize = require("sequelize");
const {
  connection,
  User,
  Item,
  Category,
  CartItem,
} = require("./sequelize-connect");
const express = require("express");
const app = express();
const port = 3002; //https://localhost:3002/
//const cors = require('cors');
//app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//creating the HTTP methods for the categories database.
app
  //Creating the POST method for adding a category to our Categories database.
  .post("/api/categories", async (req, res) => {
    try {
      await Category.create(req.body);
      res.status(201).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //Creating the GET method for retrieving all of the category objects in our categories database.
  .get("/api/categories", async (req, res) => {
    try {
      const categories = await Category.findAll({});

      res.status(200).send(categories);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the POST method for adding an item to the items database linked to a category.
  .post("/api/categories/:id/items", async (req, res) => {
    try {
      const category = await Category.findOne({ where: { id: req.params.id } });
      const item = await Item.create(req.body);

      await category.addItem(item);
      await item.reload();

      res.status(201).send(item);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the GET request for all the items belonging to a specific category.
  .get("/api/categories/:id", async (req, res) => {
    try {
      const categoryItems = await Item.findAll({
        where: {
          CategoryId: req.params.id,
        },
      });

      res.status(200).send(categoryItems);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the PUT request to update details for a specific category.
  .put("/api/categories/:id", async (req, res) => {
    try {
      await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the DELETE method for removing a category from the categories database.
  .delete("/api/categories/:id", async (req, res) => {
    try {
      await Category.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  });
//
//Creating the HTTP methods for the Items database

app //creating the PUT method for updating an item in the items database.
  .put("/api/items/:id", async (req, res) => {
    try {
      await Item.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the GET method for selecting a singular Item and displaying it's information.
  .get("/api/items/:id", async (req, res) => {
    try {
      const item = await Item.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the DELETE method for deleting an item from the items database.
  .delete("/api/items/:id", async (req, res) => {
    try {
      await Item.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  });
//

// creating the HTTP methods for User
app //creating the POST method for creating a new User and adding them to the users database.
  .post("/api/users", async (req, res) => {
    try {
      await User.create(req.body);
      res.status(201).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the GET method for retrieving a specific User.
  .get("/api/users/:id", async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(user);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the  PUT method for updating a User in the database.
  .put("/api/users/:id", async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  .delete("/api/users/:id", async (req, res) => {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  });
//

//creating the HTTP methods for the Cart database
app
  .post("/api/cart/updatecart", async (req, res) => {
    try {
      await CartItem.create(req.body);
      res.status(201).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  .get("/api/cart/:id", async (req, res) => {
    try {
      const cart = await CartItem.findAll({
        where: {
          UserId: req.params.id,
        },
      });
      res.status(200).send(cart);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  .delete("/api/cart/:user_id/items/:item_id", async (req, res) => {
    try {
      await Cart.destroy({
        where: {
          ItemId: req.params.item_id,
          UserId: req.params.user_id,
        },
      });

      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

// creating the HTTP methods for User
app //creating the POST method for creating a new User and adding them to the users database.
  .post("/api/users", async (req, res) => {
    try {
      await User.create(req.body);
      res.status(201).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the GET method for retrieving a specific User.
  .get("/api/users/:id", async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(user);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  //creating the  PUT method for updating a User in the database.
  .put("/api/users/:id", async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  .delete("/api/users/:id", async (req, res) => {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  });
//

//creating the HTTP methods for the Cart database
app
  .post("/api/cart/updatecart", async (req, res) => {
    try {
      await CartItem.create(req.body);
      res.status(201).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  .get("/api/cart/:id", async (req, res) => {
    try {
      const cart = await CartItem.findAll({
        where: {
          UserId: req.params.id,
        },
      });
      res.status(200).send(cart);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  .delete("/api/cart/:user_id/items/:item_id", async (req, res) => {
    try {
      await Cart.destroy({
        where: {
          ItemId: req.params.item_id,
          UserId: req.params.user_id,
        },
      });

      res.status(200).send();
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

// creating the HTTP methods for User
app.post("/api/users", async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});

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
