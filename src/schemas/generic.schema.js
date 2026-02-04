const joi = require("joi");

const genericSchema = joi.object({
  nombre: joi.string().min(1).max(50).required().messages({
    "string.base": `"nombre" debe ser un texto`,
    "string.empty": `"nombre" no puede estar vacío`,
  }),
});

module.exports = { genericSchema };
