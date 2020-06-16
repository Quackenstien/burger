// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  create: function (name, cb) {
    orm.create("burgers", ["burger_name", "devour"], [name, false], cb);
  },
  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", { devour: true }, condition, cb);
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
