const sequelize = require('./../config/connection');
const { User, Post } = require('./../models');
const userSeed = require('./userSeeds');
const postSeed = require('./postSeeds');


const seed = async () => {
  try {
    await userSeed();
    console.log('User seeding completed successfully!');
    await postSeed().then(() => {
      console.log('Post seeding completed successfully!');
      console.log('Seeding completed successfully!');
    });
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
  process.exit(0);
};


  seed()