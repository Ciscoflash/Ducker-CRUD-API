const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const sequelize = require("./utils/databse");
const User = require("./models/user");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// CRUD routes
app.use("/users", require("./routes/user"));

// AUTH route
app.use("/api", require("./routes/auth"));

// Error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// sync Database
sequelize
  .sync()
  .then((result) => {
    console.log("Database is Connected");
    app.listen(3001, () => console.log("Listening on port " + 3001));
  })
  .catch((error) => console.log(error));
