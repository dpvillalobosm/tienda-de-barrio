import express from "express";
import ProductoValidator from "../validator/index";
import Middleware from "../../middleware/index";
import ProductoController from "../controller/index"

const productorouter = express.Router();

productorouter.post(
  "/create",
  ProductoValidator.checkCreateProducto(),
  Middleware.handleValidationError,
  ProductoController.create
);

productorouter.get(
  "/read",
  ProductoValidator.checkReadProducto(),
  Middleware.handleValidationError,
  ProductoController.readAll
);

productorouter.get(
  "/read/:id",
  ProductoValidator.checkIdParam(),
  Middleware.handleValidationError,
  ProductoController.readById
);

productorouter.put(
  "/update/:id",
  ProductoValidator.checkIdParam(),
  Middleware.handleValidationError,
  ProductoController.update
);

productorouter.delete(
  "/delete/:id",
  ProductoValidator.checkIdParam(),
  Middleware.handleValidationError,
  ProductoController.delete
);


export default productorouter; 