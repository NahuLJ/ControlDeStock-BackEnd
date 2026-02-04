const { genericSchema } = require("../schemas/generic.schema");
const { Color } = require("../../db/models");
const genericValidations = require("./genericValidations");

module.exports = {
  validateColorSchema: genericValidations.validateSchema(genericSchema),
  validateColorById: genericValidations.validateModelById(Color),
  validateColorByName: genericValidations.validateModelByName(Color),
  validateColorName: genericValidations.validateModelName(Color)
};
