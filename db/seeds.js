const userData = require("./user.json");
const mongoose = require("./users.js");
const User = mongoose.model("User");

User.remove({})
  .then(() => {
    User.collection.insert(userData).then(users => {
      console.log(users);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });
