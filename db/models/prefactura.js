'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PreFactura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PreFactura.init({
    fecha: DataTypes.DATE,
    cliente: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PreFactura',
    timestamps: false
  });
  return PreFactura;
};