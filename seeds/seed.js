
const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedBlogData = require('./blogData');
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlogData();

  process.exit(0);
};

seedAll();