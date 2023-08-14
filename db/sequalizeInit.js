const sequelize = require('../db/config/config');
const User = require('./model/user');
async function syncDatabase() {
  await sequelize.sync();
  console.log('Database synced');
}
module.exports = { syncDatabase, User };