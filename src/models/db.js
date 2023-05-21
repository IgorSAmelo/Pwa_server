const Sequelize = require('sequelize') 
const sequelize = new Sequelize('pwaServer', 'root', 'teste', {
    host: 'localhost',
    dialect: 'mysql', /*| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
  });

sequelize.authenticate().then(function() {
    console.log('Conectado com Sucesso com o BD!')
}).catch(function(err) {
    console.log('Falha ao acessar o BD:'+ err)
})

  module.exports = {Sequelize, sequelize}