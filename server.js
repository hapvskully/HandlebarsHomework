const express = require("express")
var PORT = process.env.PORT || 3300
const app = express()
const exphs = require("express-handlebars")

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphs({ defaultLayout: "main"}))
app.set("view engine", "handlebars")
var routes = require("./controllers/burgerController")

app.use(routes)




app.listen(PORT, () => {console.log(`PORT listening! ${PORT}`)})
