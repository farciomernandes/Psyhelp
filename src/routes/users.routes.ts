import { Router } from 'express';

import CreatePsicologoService from '../models/psicologo/services/CreatePsicologoService';


import PsicologosRepository from "../models/psicologo/repositories/PsicologosRepository";

const psicologosRepository = new PsicologosRepository();

const psicologosRouter = Router();

psicologosRouter.post('/', (request, response)=>{
   try{ const {
        email,
        password,
        name,
        year,
        uf,
        sex,
        crp
    } = request.body;


   const createUser = new CreatePsicologoService(psicologosRepository);
    const user = createUser.execute({
        email,
        password,
        name,
        year,
        uf,
        sex,
        crp
    })

    return response.json(user);
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
})

psicologosRouter.get('/', (request, response)=>{
    const users = psicologosRepository.all();

    return response.json(users);
})

psicologosRouter.post('/')

export default psicologosRouter;