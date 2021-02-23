const Sequelize = require('sequelize')

const seq = new Sequelize('slim_weibo_db', 'root', 'chenxin109133106', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = seq
