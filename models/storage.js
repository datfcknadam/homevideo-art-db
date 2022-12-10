'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class storage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  storage.init({
    id: DataTypes.INTEGER,
    video_id: DataTypes.INTEGER,
    hash_dir: DataTypes.STRING,
    hash_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'storage',
  });
  return storage;
};