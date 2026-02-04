const { Talle } = require("../../db/models");

//1. Crear un nuevo talle
const createTalle = async (req, res) => {
  const newTalle = await Talle.create(req.body);
  return res.status(201).json(newTalle);
};

//2. Actualizar un talle por ID
const updateTalle = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  await Talle.update({ nombre }, { where: { id } });

  return res.status(200).json(await Talle.findByPk(id));
};

//3. Eliminar un talle por ID
const deleteTalle = async (req, res) => {
  const { id } = req.params;
  await Talle.destroy({ where: { id } });
  return res.status(204).send();
};

//4. Obtener todos los talles
const getAllTalles = async (req, res) => {
  const talles = await Talle.findAll();
  return res.status(200).json(talles);
};

//5. Obtener un talle por ID
const getTalleById = async (req, res) => {
  const { id } = req.params;
  const talle = await Talle.findByPk(id);
  return res.status(200).json(talle);
};

//6. Buscar talles por nombre
const getTalleByName = async (req, res) => {
  const { nombre } = req.params;
  const talles = await Talle.findAll({ where: { nombre } });
  return res.status(200).json(talles);
};

module.exports = {
  createTalle,
  updateTalle,
  deleteTalle,
  getAllTalles,
  getTalleById,
  getTalleByName,
};
