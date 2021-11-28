import { body, query, param } from "express-validator";

class ClienteValidator {
  checkCreateCliente() {
    return [
      body("id")
        .optional()
        .isUUID(4)
        .withMessage("The value should be UUID v4"),
      // body("user_id")
      //   .optional()
      //   .isUUID(4)
      //   .withMessage("The value should be UUID v4"),
      body("name")
        .notEmpty()
        .withMessage("El valor de nombre no puede estar vacio"),
      body("celnum")
        .notEmpty()
        .withMessage("El valor de numero celular no puede estar vacio"),
      body("direccion")
        .notEmpty()
        .withMessage("El valor de direccion no puede estar vacio"),    
    ];
  }
  checkReadCliente() {
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

export default new ClienteValidator();
