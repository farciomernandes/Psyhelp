import { Router } from 'express';
import usersRouter from './users.routes';
import psicologosRouter from './psicologos.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/psicologo', psicologosRouter);


export default routes;