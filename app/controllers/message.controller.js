const db = require("../models");

const Message = db.messages;

exports.save = (req, res) => {
    const message = {
        name: req.body.name,
        text: req.body.message
    }
    
    Message.create(message)
    .then(() => {
        res.redirect("/");
    })
    .catch(error => {
        res
            .status(500)
            .end();
    });
}