const express = require("express");
const router = express.Router();
const talleController = require("../controllers/talle.controller");
const {
  validateTalleSchema,
  validateTalleById,
  validateTalleByName,
  validateTalleName,
} = require("../middlewares/talle.middleware");

//1. Crear un nuevo talle
router.post(
  "/talles",
  validateTalleSchema,
  validateTalleName,
  talleController.createTalle,
);

//2. Actualizar un talle por ID
router.put(
  "/talles/:id",
  validateTalleSchema,
  validateTalleById,
  validateTalleName,
  talleController.updateTalle,
);

//3. Eliminar un talle por ID
router.delete("/talles/:id", 
  validateTalleById, 
  talleController.deleteTalle
);

//4. Obtener todos los talles
router.get("/talles", talleController.getAllTalles);

//5. Obtener un talle por ID
router.get("/talles/:id", 
  validateTalleById, 
  talleController.getTalleById
);

//6. Buscar talles por nombre
router.get(
  "/talles/:nombre",
  validateTalleByName,
  talleController.getTallesByName,
);

module.exports = router;
