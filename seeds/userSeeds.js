const sequelize = require('./../config/connection');
const { User } = require('./../models/index');
const bcrypt = require('bcrypt');


const userData = [
    {
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    },
    {
      name: 'Daffy Duck',
      email: 'succatash@aol.com',
      password: '1234'
    },
    {
      name: 'Bob Ross',
      email: 'littlemistakes@gmail.com',
      password: '4321'
    },
    {
     name: 'Obi Wan',
     email: 'theforce@hotmail.com',
     password: 'numbers'
    }
  ];
  
  
const userSeed = async () => {
  try {
    const users = await Promise.all(
      userData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return {
          name: user.name,
          email: user.email,
          password: hashedPassword,
        };
      })
    );
    await sequelize.sync({ force: false });
    await User.bulkCreate(users);
    console.log('Users seeded successfully');
  } catch (error) {
    console.log('Error seeding users:', error);
  }
};
  
  module.exports = userSeed;