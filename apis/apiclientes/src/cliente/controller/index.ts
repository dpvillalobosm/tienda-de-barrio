import {Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { ClienteInstance } from "../model/index";




class ClienteController {

    async create(req:Request, res:Response) {
        const id = uuidv4();
        try {
            const record = await ClienteInstance.create({ ...req.body, id });
            return res.json({ record, msg: "Cliente agregado exitosamente" });
        } catch (e) {
            return res.json({ msg: "Error al crear", status: 500, route: "/create" });
        }
    }

    async readAll(req:Request, res:Response){
        try {
            const limit = req.query?.limit as number | undefined;
            const offset = req.query?.offset as number | undefined;
            const records = await ClienteInstance.findAll({ where: {}, limit, offset });
            return res.json(records);
        } catch (e) {
            return res.json({ msg: "Error al consultar", status: 500, route: "/read" });
        }
    }

    async readById(req:Request, res:Response){
        try {
            const { id } = req.params;
            const record = await ClienteInstance.findOne({ where: { id } });
            return res.json(record);
        } catch (e) {
            return res.json({ msg: "Error al consultar", status: 500, route: "/read:id" });
        }
    }

    async update(req:Request, res:Response){
        try {
            const { id } = req.params;
            const record = await ClienteInstance.findOne({ where: { id } });
    
            if (!record) {
            return res.json({ msg: "No se encuentra el registro a actualizar" });
            }
    
            const updatedRecord = await record.update({
                ...req.body,
            });
            return res.json({ record: updatedRecord });
        } catch (e) {
            return res.json({ msg: "Error al actualizar", status: 500, route: "/update/:id" });
        } 
    }

    async delete(req:Request, res:Response){
        try {
            const { id } = req.params;
            const record = await ClienteInstance.findOne({ where: { id } });
    
            if (!record) {
            return res.json({ msg: "No se encuentra el registro a eliminar" });
            }
    
            const deletedRecord = await record.destroy();
            return res.json({ record: deletedRecord });
        } catch (e) {
            return res.json({ msg: "Error al eliminar", status: 500, route: "/delete/:id" });
        }
    }
}

export default new ClienteController();