'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  video_course.init({
    id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    video_id: DataTypes.INTEGER,
    video_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'video_course',
  });
  return video_course;
};