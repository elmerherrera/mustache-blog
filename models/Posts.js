const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model {}

Post.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    textContent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    time: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW
    },
    // Create a foreign key to the User model
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'post'
  });
  
  // Create an association between the User and Post models
  User.hasMany(Post);
  Post.belongsTo(User);
  
  module.exports = Post;