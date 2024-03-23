import express from 'express';
import { MileController } from '../controller/mile.controler'

export const mileRoutes = express.Router();
const mileController = new MileController();

// Rotas para CRUD de usuários
mileRoutes.get('/', mileController.getAll);
mileRoutes.get('/:id', mileController.getById);
mileRoutes.post('/', mileController.create);
mileRoutes.put('/:id', mileController.update);
mileRoutes.delete('/:id', mileController.delete);