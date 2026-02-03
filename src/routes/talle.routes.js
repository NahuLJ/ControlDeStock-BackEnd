const express = require("express");
const router = express.Router();
const {
  createTalle,
  updateTalle,
  deleteTalle,
  getAllTalles,
  getTalleById,
  getTalleByName
} = require("../controllers/talle.controller");

const {
  validateTalleSchema,
  validateTalleById,
  validateTalleByName,
  validateTalleName,
} = require("../middlewares/talle.middleware");

//1. Crear un nuevo talle
router.post(
  "/",
  validateTalleSchema,
  validateTalleName,
  createTalle,
);

//2. Actualizar un talle por ID
router.put(
  "/:id",
  validateTalleSchema,
  validateTalleById,
  validateTalleName,
  updateTalle,
);

//3. Eliminar un talle por ID
router.delete("/:id", 
  validateTalleById, 
  deleteTalle
);

//4. Obtener todos los talles
router.get("/", getAllTalles);

//5. Obtener un talle por ID
router.get("/:id", 
  validateTalleById, 
  getTalleById
);

//6. Buscar talles por nombre
router.get(
  "/nombre/:nombre",
  validateTalleByName,
  getTalleByName,
);

module.exports = router;
