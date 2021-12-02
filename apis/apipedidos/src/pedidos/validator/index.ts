import { body, query, param } from "express-validator";

class PedidoValidator {
  checkCreatePedido() {
    return [
      body("id")
        .optional()
        .isUUID(4)
        .withMessage("El valor debe ser un UUID v4"),
      body("idCliente")
        .notEmpty()
        .isUUID(4)
        .withMessage("El id del cliente es obligatorio y debe ser un UUID v4"),
      body("idProducto")
        .notEmpty()
        .isUUID(4)
        .withMessage("El id del producto es obligatorio y debe ser un UUID v4")  
    ];
  }
  checkReadPedido() {
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
        .withMessage("El id no debe estar vacío")
        .isUUID(4)
        .withMessage("El id debe ser un UUID v4"),
    ];
  }
}

export default new PedidoValidator();
