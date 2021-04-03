var orm = require("../config/orm");
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (burger_name, cb) {
    orm.create(
      "burgers",
      ["burger_name", "devoured"],
      [burger_name, false],
      cb
    );
  },
  update: function(burger_id, cb){
      var condition = "id=" + burger_id 
      orm.update("burgers", {devoured: true}, condition, cb)
  }
};

module.exports = burger;
