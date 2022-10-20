module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(25),
            allowNull: false
        },
        text: {
            type: Sequelize.STRING(200),
            allowNull: false
        }
    }, {
        createdAt: "time",
        updatedAt: false
    });
    
    return Message;
}