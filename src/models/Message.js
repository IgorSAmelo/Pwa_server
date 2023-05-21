const db = require('./db')

const Message = db.sequelize.define('message', {
    id:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    message:{
        type: db.Sequelize.STRING,
        allowNull: false,
    }
}) 



Message.sync()

module.exports = Message