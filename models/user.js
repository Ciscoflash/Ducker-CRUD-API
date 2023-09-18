const sequelize = require("sequelize");
const db = require("../utils/databse");
// these is importing the database connection

const User = db.define("user", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: sequelize.STRING,
  },
  password: {
    type: sequelize.STRING,
  },
});

module.exports = User;
