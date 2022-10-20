const db = require("../models");

const Message = db.messages;

exports.render = (req, res) => {
    Message.findAll()
    .then(data => {
        res.render("index", { data: data.reverse() });
    })
    .catch(error => {
        res
            .status(500)
            .end();
    });
}