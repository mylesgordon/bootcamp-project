const Sequelize = require("sequelize");

const userModel = {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please enter a valid email name.",
      },
    },
    //unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please enter a valid password.",
      },
    },
  },
};

const categoryModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please enter a valid Restaurant name",
      },
    },
  },
};

const itemModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please enter a valid item name",
      },
    },
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please enter a valid image link",
      },
    },
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please enter a valid Restaurant name",
      },
      isNumeric: {
        msg: "Please only input numbers",
      },
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please enter a valid image link",
      },
    },
  },
};

const cartItemModel = {};

module.exports = { userModel, categoryModel, itemModel, cartItemModel };
