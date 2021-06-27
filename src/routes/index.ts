import { Router } from 'express';
import usersRouter from './users.routes';
import psicologosRouter from './psicologos.routes';
import postsRouter from './pots.routes';
import commentsRouter from './comments.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/user', usersRouter);
routes.use('/psicologo', psicologosRouter);
routes.use('/posts', postsRouter);
routes.use('/comment', commentsRouter);
routes.use('/sessions', sessionsRouter);




export default routes;