var express = require("express");
var router = express.Router();
var burger = require("../models/burger");
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log("here");
    const burgerData = { burger_data: data };
    console.log(burgerData);
    res.render("index", burgerData);
  });
});
router.post("/burgers/create", function (req, res) {
  var burgers = req.body.burger_name;
  burger.create(burgers, function (data) {
    console.log("burger insetred", data);
    res.redirect("/");
  });
});
router.put("/burgers/:id", function(req, res){
    var burger_id = req.params.id
    burger.update(burger_id, function(data){
        console.log("burger updated!", data)
        res.sendStatus(200)
    })
})
module.exports = router;
