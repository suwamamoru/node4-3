'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      Post.belongsToMany(models.User, { through: models.Like, foreignKey: 'userId'});
      Post.hasMany(models.Like, {
        foreignKey: 'postId'
      })
    }
  }
  Post.init({
    userId: DataTypes.STRING,
    title: DataTypes.STRING,
    contents: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};