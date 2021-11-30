import express from "express";
import PedidoValidator from "../validator/index";
import Middleware from "../../middleware/index";
import PedidosController from "../controller/index"

const pedidorouter = express.Router();

pedidorouter.post(
  "/create",
  PedidoValidator.checkCreatePedido(),
  Middleware.handleValidationError,
  PedidosController.create
);

pedidorouter.get(
  "/read",
  PedidoValidator.checkReadPedido(),
  Middleware.handleValidationError,
  PedidosController.readAll
);

pedidorouter.get(
  "/read/:id",
  PedidoValidator.checkIdParam(),
  Middleware.handleValidationError,
  PedidosController.readById
);

pedidorouter.put(
  "/update/:id",
  PedidoValidator.checkIdParam(),
  Middleware.handleValidationError,
  PedidosController.update
);

pedidorouter.delete(
  "/delete/:id",
  PedidoValidator.checkIdParam(),
  Middleware.handleValidationError,
  PedidosController.delete
);


export default pedidorouter; 