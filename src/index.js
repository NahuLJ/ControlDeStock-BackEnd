const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('../db/models');
const cors = require('cors');
const talleRoutes = require('../src/routes/talle.routes');

const swaggerUI = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swagger');
const { FORCE } = require('sequelize/lib/index-hints');

app.use(express.json());
app.use(cors());

app.use('/api/talles', talleRoutes);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

/*
  Correr por primera vez para crear la base y tablas
  1) npx sequelize-cli db:create // Crear la base de datos
  2) npx sequelize-cli db:migrate // Crear las tablas según las migraciones
*/

app.listen(PORT, async () => {
  try {
    await db.sequelize.sync();
    console.log(`Base de datos conectada y sincronizada correctamente en el puerto ${PORT}.`);
  }
  catch (error) {
    console.error('Error al conectar la base de datos:', error);
  }
});