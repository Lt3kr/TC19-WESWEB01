const express = require("express");
const app = express();
const port = 3000;
const databaseModule = require("./databaseModule")

app.use(express.static(__dirname + "\\client"));

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");

const namn = [];

app.get("/", (req, res) => {
  const namnListor = await databaseModule.ShowNameList();
  res.render("index.ejs", { names: namn, nameLists: namnListor });
});

app.get("/Save", (req, res) => {
  databaseModule.SaveNameList(namn);

  namn.splice(0, namn.length);
  res.redirect("/");
});

app.post("/", function (req, res) {
  namn.push(req.body.firstName);
  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
