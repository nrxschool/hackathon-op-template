import express from 'express';
import { mileRoutes } from './mile.route';

export const routes = express.Router();

routes.use('/v1/miles', mileRoutes);