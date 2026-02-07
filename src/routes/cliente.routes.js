const express = require('express');
const router = express.Router();
const {
  validateClienteSchema,
  validateClienteUpdateSchema,
  validateClienteById,
  validateClienteByName
} = require("../middlewares/cliente.middleware");
const {
  createCliente,
  updateCliente,
  deleteCliente,
  getClienteById,
  getAllClientes,
  getClienteByName
} = require('../controllers/cliente.controller');

//1. Crear un nuevo cliente
router.post('/',
  validateClienteSchema, 
  createCliente
);

//2. Modificar un cliente existente
router.put('/:id',
  validateClienteById,
  validateClienteUpdateSchema,
  updateCliente
);

//3. Eliminar un cliente
router.delete('/:id', 
  validateClienteById,
  deleteCliente
);

//4. Obtener un cliente por su ID
router.get('/:id', 
  validateClienteById,
  getClienteById
);

//5. Obtener todos los clientes
router.get('/', getAllClientes);

//6. Buscar clientes por nombre 
router.get('/nombre/:nombre', 
  validateClienteByName,
  getClienteByName
);

module.exports = router;