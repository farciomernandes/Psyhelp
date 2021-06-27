import { Router } from 'express';

import AuthenticateService from '../shared/sessions/AuthenticateService';


const sessionsRouter = Router();

sessionsRouter.post('/', async(request, response)=>{

   
    try{ 
       const {
        email,
        password
    } = request.body;

    console.log('CHEGOU AQUI')

   const authenticateService = new AuthenticateService();
    
   const authenticate = await authenticateService.execute({email, password});

   return response.json(authenticate);
    
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
})


export default sessionsRouter;