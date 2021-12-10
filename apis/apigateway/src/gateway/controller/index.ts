import {Request, Response } from "express";

class GatewayController {

    async create(req:Request, res:Response) {
        try {
            return res.status(501).json({msg: "Disponible próximamente", status: 501 });
        } catch (e) {
            return res.json({ msg: "Error Interno", status: 500, route: "/crearPedido" });
        }
    }

    async readAll(req:Request, res:Response){
        try {
            return res.status(501).json({msg: "Disponible próximamente", status: 501 });
        } catch (e) {
            return res.status(500).json({ msg: "Error Interno", status: 500, route: "/consultarPedidos" });
        }
    }

    async readById(req:Request, res:Response){
        try {
            return res.status(501).json({msg: "Disponible próximamente", status: 501 });
        } catch (e) {
            return res.status(500).json({ msg: "Error Interno", status: 500, route: "/consultarPedido/:id" });
        }
    }

    async update(req:Request, res:Response){
        try {
            return res.status(501).json({msg: "Disponible próximamente", status: 501 });
        } catch (e) {
            return res.status(500).json({ msg: "Error Interno", status: 500, route: "/modificarPedido/:id" });
        } 
    }

    async delete(req:Request, res:Response){
        try {
            return res.status(501).json({msg: "Disponible próximamente", status: 501 });
        } catch (e) {
            return res.status(500).json({ msg: "Error Interno", status: 500, route: "/cancelarPedido/:id" });
        }
    }
}

export default new GatewayController();