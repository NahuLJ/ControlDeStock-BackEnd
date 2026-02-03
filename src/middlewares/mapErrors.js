const mapErrors = (errores) => {
  return errores.details.map(err => {
    return {atributo : err.path[0], mensaje: err.message}
  })
};

module.exports = mapErrors;