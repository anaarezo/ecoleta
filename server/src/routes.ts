import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index se for uma listagem, show se for exibir um único registro, create/store, update e delete/destroy
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//sempre que usar o await é necessário usar o async dentro da rota
routes.get('/items', itemsController.index);

// criação de rota de coleta
routes.post('/points', pointsController.create);
// Listar vários pontos de coleta
routes.get('/points', pointsController.index);
//listar ponto de coleta específico
routes.get('/points/:id', pointsController.show);


export default routes;

// Service Pattern
// Repository.Pattern (data Mapper)