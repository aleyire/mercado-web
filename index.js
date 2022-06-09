const express = require("express")
const app = express()
const { engine } = require("express-handlebars")

app.listen(3000, () => {
  console.log("Server on")
})

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/img", express.static(__dirname + "/public/img"))

app.set("view engine", "handlebars")

app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes/",
  })
)

app.get("/", (req, res) => {
  res.render("Menu", {
    layout: "Menu",
    productos: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
  })
})


/*app.get("/", (req, res) => {
  res.render("menu", { layout: "menu" })
})*/
