const genericSchemaValidator = require("../schemas/genericSchemaValidator");
const mapErrors = require("./mapErrors");

const validateSchema = (schema) => async (req, res, next) => {
  const errores = genericSchemaValidator(schema, req.body);
  
  if (errores) {
    return res.status(400).json(mapErrors(errores));
  }
  next();
}

const validateModelById = (Model) => async (req, res, next) =>  {
  const instance = await Model.findByPk(req.params.id);
  if (!instance) {
    return res.status(404).json({ message: `${Model.name} con id ${req.params.id} no existe` });
  }
  next();
}

const validateModelByName = (Model) => async (req, res, next) => {
  const { nombre } = req.params;
  const instance = await Model.findOne({ where: { nombre } });
  if (!instance) {
    return res.status(404).json({ message: `${Model.name} con nombre ${nombre} no existe` });
  }
  next();
}

const validateModelName = (Model) => async (req, res, next) => {
  const { nombre } = req.body;
  const instance = await Model.findOne({ where: { nombre } });
  if (instance) {
    return res.status(400).json({ message: `${Model.name} con el nombre ${nombre} ya esta en uso` });
  }
  next();
}

module.exports = {
  validateSchema,
  validateModelByName,
  validateModelById,
  validateModelName
};