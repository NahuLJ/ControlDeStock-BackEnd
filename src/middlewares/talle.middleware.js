const { talleSchema } = require("../schemas/talle.schema");
const mapErrors = require("../middlewares/mapErrors");
const genericSchemaValidator = require("../schemas/genericSchemaValidator");
const { Talle } = require("../../db/models");
const {
  validateModelById,
  validateModelName,
  validateModelByName,
} = require("./genericValidations");

const validateTalleSchema = (req, res, next) => {
  const errores = genericSchemaValidator(talleSchema, req.body);
  //abortEarly: false -> para que me muestre todos los errores y no solo el primero
  if (errores) {
    return res.status(400).json(mapErrors(errores));
  }
  next();
};

const validateTalleById = (req, res, next) => {
  const { id } = req.params;
  const error = validateModelById(Talle, id);
  if (error) {
    return res.status(404).json(error);
  }
  next();
};

const validateTalleByName = (req, res, next) => {
  const { nombre } = req.params;
  const error = validateModelByName(Talle, nombre);
  if (error) {
    return res.status(404).json(error);
  }
  next();
};

const validateTalleName = (req, res, next) => {
  const { nombre } = req.body;
  const error = validateModelName(Talle, nombre);
  if (error) {
    return res.status(400).json(error);
  }
  next();
};

module.exports = {
  validateTalleSchema,
  validateTalleById,
  validateTalleByName,
  validateTalleName
};
