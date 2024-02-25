const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('HostelHorseDB', 'root', '', {
  host: '127.0.0.1',
  password: 'root',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
