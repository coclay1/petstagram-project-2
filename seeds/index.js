const sequelize = require('../config/connection');
const seedUsers = require('./');
const seedPosts = require('./');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  process.exit(0);
};

seedAll();