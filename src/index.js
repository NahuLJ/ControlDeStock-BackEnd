const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('../db/models');

app.use(express.json());

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