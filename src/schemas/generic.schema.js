const joi = require("joi");

const genericSchema = joi.object({
  nombre: joi.string().min(1).max(50).required().messages({
    "string.base": `"nombre" debe ser un texto`,
    "string.empty": `"nombre" no puede estar vacío`,
    "string.min": `"nombre" debe tener al menos 1 caracteres`,
    "string.max": `"nombre" no debe exceder los 50 caracteres`,
    "any.required": `"nombre" es obligatorio`,
  }),
});

module.exports = { genericSchema };
