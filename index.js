const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const passport = require("./config/passport")();
const userController = require("./controllers/users.js");
const app = express();

app.set("port", process.env.PORT || 3001);
app.use(cors());
app.use(parser.json());
app.use(passport.initialize());

app.use("/users", userController);

app.listen(app.get("port"), () => {
  console.log("Server listening on port " + app.get("port"));
});
