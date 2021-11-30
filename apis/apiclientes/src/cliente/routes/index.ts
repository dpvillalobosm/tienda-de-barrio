import express from "express";
import ClienteValidator from "../validator/index";
import Middleware from "../../middleware/index";
import ClienteController from "../controller/index"

const clienterouter = express.Router();

clienterouter.post(
  "/create",
  ClienteValidator.checkCreateCliente(),
  Middleware.handleValidationError,
  ClienteController.create
);

clienterouter.get(
  "/read",
  ClienteValidator.checkReadCliente(),
  Middleware.handleValidationError,
  ClienteController.readAll
);

clienterouter.get(
  "/read/:id",
  ClienteValidator.checkIdParam(),
  Middleware.handleValidationError,
  ClienteController.readById
);

clienterouter.put(
  "/update/:id",
  ClienteValidator.checkIdParam(),
  Middleware.handleValidationError,
  ClienteController.update
);

clienterouter.delete(
  "/delete/:id",
  ClienteValidator.checkIdParam(),
  Middleware.handleValidationError,
  ClienteController.delete
);


export default clienterouter; 