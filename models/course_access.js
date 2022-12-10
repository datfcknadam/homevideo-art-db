'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course_access extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course_access.init({
    id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    student_group_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course_access',
  });
  return course_access;
};