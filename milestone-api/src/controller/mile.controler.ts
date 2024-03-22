import { NextFunction, Request, Response } from 'express';
import { MileModel } from '../model/mile';

export class MileController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { query } = req
            const miles = await MileModel.find(query);
            res.json(miles);
        } catch (error) {
            next(error)
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const mile = await MileModel.findById(id);
            if (!mile) {
                throw new Error(`Mile with id ${id} not found`)
            }
            res.json(mile);
        } catch (error) {
            next(error)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body

            const existingMile = await MileModel.findOne({ name: data.name })
            if (existingMile) {
                throw new Error('Já existe um usuário com este email.')
            }
            const mile = new MileModel(data)
            const usuarioSalvo = await mile.save()

            res.status(201).json({ message: 'Usuário cadastrado com sucesso' })
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response) {
        // Implementação para atualizar um usuário existente
    }

    async delete(req: Request, res: Response) {
        // Implementação para excluir um usuário
    }
}