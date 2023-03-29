const sequelize = require('./../config/connection');
const { Post } = require('./../models')

const posts = [
    {
      textContent: 'I finished my project on time today!',
      userId: 1 
    },
    {
      textContent: 'I learned a new skill today!',
      userId: 2 
    },
    {
      textContent: 'I had a great meeting with my team today!',
      userId: 3 
    }
  ];

  const postSeed = async () => {
    await sequelize.sync({ force: false });
    await Post.bulkCreate(posts);
  };

  module.exports = postSeed;