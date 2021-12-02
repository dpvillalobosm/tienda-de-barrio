import {Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { PedidoInstance } from "../model/index";




class PedidosController {

    async create(req:Request, res:Response) {
        const id = uuidv4();
        try {
            const record = await PedidoInstance.create({ ...req.body, id });
            return res.json({ record, msg: "Pedido agregado exitosamente" });
        } catch (e) {
            return res.json({ msg: "Error al crear el pedido", status: 500, route: "/create" });
        }
    }

    async readAll(req:Request, res:Response){
        try {
            const limit = req.query?.limit as number | undefined;
            const offset = req.query?.offset as number | undefined;
            const records = await PedidoInstance.findAll({ where: {}, limit, offset });
            return res.json(records);
        } catch (e) {
            return res.json({ msg: "Error al consultar los pedidos", status: 500, route: "/read" });
        }
    }

    async readById(req:Request, res:Response){
        try {
            const { id } = req.params;
            const record = await PedidoInstance.findOne({ where: { id } });
            return res.json(record);
        } catch (e) {
            return res.json({ msg: "Error al consultar el pedido", status: 500, route: "/read:id" });
        }
    }

    async update(req:Request, res:Response){
        try {
            const { id } = req.params;
            const record = await PedidoInstance.findOne({ where: { id } });
    
            if (!record) {
            return res.json({ msg: "No se puede encontrar el pedido a actualizar" });
            }
    
            const updatedRecord = await record.update({
                ...req.body,
            });
            return res.json({ record: updatedRecord });
        } catch (e) {
            return res.json({ msg: "Error al actualizar el pedido", status: 500, route: "/update/:id" });
        } 
    }

    async delete(req:Request, res:Response){
        try {
            const { id } = req.params;
            const record = await PedidoInstance.findOne({ where: { id } });
    
            if (!record) {
            return res.json({ msg: "No se encuentra el pedido a eliminar" });
            }
    
            const deletedRecord = await record.destroy();
            return res.json({ record: deletedRecord });
        } catch (e) {
            return res.json({ msg: "Error al eliminar el pedido", status: 500, route: "/delete/:id" });
        }
    }
}

export default new PedidosController();