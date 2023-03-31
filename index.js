const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const handle = handlebars.create({ defaultLayout: "main" });
const bodyParser = require("body-parser");
const Post = require('./models/Post')


//config template engine handlebars como template principal do projeto
app.engine("handlebars", handle.engine);
app.set("view engine", "handlebars");
app.set("view engine", "handlebars");

// configuração do body-parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//rotas
app.get("/cad", function (req, res) {
  res.render("formulario");
});

app.post("/add", function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    contudo: req.body.conteudo
  }).then(function(){
    res.send("post criado com sucesso!")
  }).catch(function(erro){
    res.send("houve um erro " + erro)
  })
})
  //configuração do banco de dados SEQUELIZE: estão no arquivo db.js


app.listen(8085, function () {
  console.log("bem vindo");
});
