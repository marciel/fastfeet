import {Router} from 'express';

import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/sessions',SessionController.store);

//Utilizando middleware local
//routes.post('/sessions',authMiddleware, SessionController.store);

routes.get('/', async (req,res)=>{
  return res.json({message: 'FastFeet' });
});

//Utilizando middleware geral, para todas as rotas abaixo da chamada
routes.use(authMiddleware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

export default routes;
