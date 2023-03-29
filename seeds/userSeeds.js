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
      name: 'Jade Jadeson',
      email: 'frostedflakes64@hotmail.com',
      password: 'wordpass'
    },
    {
      name: 'Bob Johnson',
      email: 'bjohnson@example.com',
      password: 'p@ssw0rd'
    },
    {
     name: 'Names Jameson',
     email: 'NamestheJames@Jamenames.com',
     password: 'trueAdmin'
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