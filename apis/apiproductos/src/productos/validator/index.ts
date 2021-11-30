import { body, query, param } from "express-validator";

class ProductoValidator {
  checkCreateProducto() {
    return [
      body("id")
        .optional()
        .isUUID(4)
        .withMessage("The value should be UUID v4"),
      body("titulo")
        .notEmpty()
        .withMessage("El título del producto no puede estar vacío"),
      body("costoUnitario")
        .notEmpty()
        .withMessage("El costo unitario no puede estar vacío"),
      body("unidad")
        .notEmpty()
        .withMessage("La unidad no puede estar vacía"),
      body("tipoUnidad")
        .notEmpty()
        .withMessage("El Tipo de Unidad no puede estar vacío"),  
    ];
  }
  checkReadProducto() {
    return [
      query("limit")
        .optional()
        .isNumeric()
        .withMessage("El valor de limite debe ser un numero")
        .isInt({ min: 1, max: 10 })
        .withMessage("El valor de numero debe ser un entero entre 1 y 10"),
      query("offset")
        .optional()
        .isNumeric()
        .withMessage("El valor de offset debe ser un numero"),
    ];
  }
  checkIdParam() {
    return [
      param("id")
        .notEmpty()
        .withMessage("The value should not be empty")
        .isUUID(4)
        .withMessage("The value should be UUID v4"),
    ];
  }
}

export default new ProductoValidator();
