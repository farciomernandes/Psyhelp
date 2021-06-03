import { Router } from 'express';

import CreatePsicologoService from '../models/psicologo/services/CreatePsicologoService';
import UpdatePsicologoService from '../models/psicologo/services/UpdatePsicologoService';


import  PsicologosRepository from "../models/psicologo/repositories/PsicologosRepository";
const psicologoRepository = new PsicologosRepository();

const psicologosRouter = Router();

psicologosRouter.post('/', (request, response)=>{
   try{ const {
        email,
        password,
        name,
        year,
        uf,
        sex,
        crp,
        phone,
        city,
        description, 
        speciality
    } = request.body;


   const createPsicologo = new CreatePsicologoService(psicologoRepository);
    const psicologo = createPsicologo.execute({
        email,
        password,
        name,
        year,
        uf,
        sex,
        crp,
        phone,
        city,
        description, 
        speciality
    })

    return response.json(psicologo);
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
})

psicologosRouter.get('/', (request, response)=>{
    const users = psicologoRepository.all();

    return response.json(users);
})

psicologosRouter.put('/:id', (request, response)=>{
    const { id } = request.params;

    const { 
        email,
        password,
        name,
        year,
        uf,
        sex,
        crp,
        phone,
        city,
        description, 
        speciality
     } = request.body;

     const updatePsicologoService = new UpdatePsicologoService(psicologoRepository);
    try{
        const psicologo = updatePsicologoService.execute({
            email,
            password,
            name,
            year,
            uf,
            sex,
            crp,
            id,
            phone,
            city,
            description, 
            speciality
     })
     

     return response.status(200).json(psicologo)

    }catch(err){
        return response.status(400).json({ error: err.message})
    }
    

     
})

export default psicologosRouter;