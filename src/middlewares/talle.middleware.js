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

const validateTalleById = async (req, res, next) => {
  const error = await validateModelById(Talle, req.params.id);
  if (error) {
    return res.status(404).json(error);
  }
  next();
};

const validateTalleByName = async (req, res, next) => {
  const error = await validateModelByName(Talle, req.params.nombre);
  if (error) {
    return res.status(404).json(error);
  }
  next();
};

const validateTalleName = async (req, res, next) => {
  const error = await validateModelName(Talle, req.body.nombre);
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
