import {Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { ProductoInstance } from "../model/index";

class ProductosController {

    async create(req:Request, res:Response) {
        const id = uuidv4();
        try {
            const record = await ProductoInstance.create({ ...req.body, id });
            return res.json({ record, msg: "Producto agregado exitosamente" });
        } catch (e) {
            return res.json({ msg: "error al crear", status: 500, route: "/create" });
        }
    }

    async readAll(req:Request, res:Response){
        try {
            const limit = req.query?.limit as number | undefined;
            const offset = req.query?.offset as number | undefined;
            const records = await ProductoInstance.findAll({ where: {}, limit, offset });
            return res.json(records);
        } catch (e) {
            return res.json({ msg: "fail to read", status: 500, route: "/read" });
        }
    }

    async readById(req:Request, res:Response){
        try {
            const { id } = req.params;
            const record = await ProductoInstance.findOne({ where: { id } });
            return res.json(record);
        } catch (e) {
            return res.json({ msg: "fail to read", status: 500, route: "/read:id" });
        }
    }

    async update(req:Request, res:Response){
        try {
            const { id } = req.params;
            const record = await ProductoInstance.findOne({ where: { id } });
    
            if (!record) {
            return res.json({ msg: "Can not find existing record" });
            }
    
            const updatedRecord = await record.update({
                ...req.body,
            });
            return res.json({ record: updatedRecord });
        } catch (e) {
            return res.json({ msg: "fail to read", status: 500, route: "/update/:id" });
        } 
    }

    async delete(req:Request, res:Response){
        try {
            const { id } = req.params;
            const record = await ProductoInstance.findOne({ where: { id } });
    
            if (!record) {
            return res.json({ msg: "Can not find existing record" });
            }
    
            const deletedRecord = await record.destroy();
            return res.json({ record: deletedRecord });
        } catch (e) {
            return res.json({ msg: "fail to read", status: 500, route: "/delete/:id" });
        }
    }
}

export default new ProductosController();