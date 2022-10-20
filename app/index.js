const express = require("express");
const messageController = require("./controllers/message.controller");
const mainController = require("./controllers/main.controller");

const db = require("./models");
db.sequelize.sync({ force: false  });

require("dotenv").config();

const app = express()
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.set("views", "./app/views");

app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("./app/public"));

app.get("/", mainController.render);

app.post("/message", messageController.save);

app.listen(
    PORT,
    console.log(`listening on port : ${ PORT }`)
);