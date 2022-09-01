const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NewPost extends Model {}

NewPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content:{
        type: DataTypes.TEXT,
      allowNull: false,
    },
      
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'newpost',
  }
);

module.exports = NewPost;
