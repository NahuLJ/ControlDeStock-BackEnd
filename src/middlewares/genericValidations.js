const validateModelByName = (Model, name) => {
  const instance = Model.findOne({ where: { name } });
  if (!instance) {
    return { message: `${Model.name} con nombre ${name} no existe` };
  }
}

const validateModelById = (Model, idParam) => {
  const instance = Model.findByPk({ idParam });
  if (!instance) {
    return { message: `${Model.name} con id ${idParam} no existe` };
  }
}

const validateModelName = (Model, name) => {
  const instance = Model.findOne({ where: { name } });
  if (instance) {
    return { message: `${Model.name} ya esta en uso` };
  }
}

module.exports = {
  validateModelByName,
  validateModelById,
  validateModelName
};