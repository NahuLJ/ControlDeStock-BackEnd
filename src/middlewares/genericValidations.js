const validateModelByName = async (Model, nombre) => {
  const instance = await Model.findOne({ where: { nombre } });
  if (!instance) {
    return { message: `${Model.name} con nombre ${nombre} no existe` };
  }
}

const validateModelById = async (Model, idParam) => {
  const instance = await Model.findByPk(idParam);
  if (!instance) {
    return { message: `${Model.name} con id ${idParam} no existe` };
  }
}

const validateModelName = async (Model, nombre) => {
  const instance = await Model.findOne({ where: { nombre } });
  if (instance) {
    return { message: `${Model.name} con el nombre ${nombre} ya esta en uso` };
  }
}

module.exports = {
  validateModelByName,
  validateModelById,
  validateModelName
};