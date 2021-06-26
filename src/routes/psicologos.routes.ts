import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import PostsRepository from '../modules/post/typeorm/repositories/PostsRepository';

import CreatePsicologoService from '../modules/psicologo/services/CreatePsicologoService';
import UpdatePsicologoService from '../modules/psicologo/services/UpdatePsicologoService';


import  PsicologosRepository from "../modules/psicologo/typeorm/repositories/PsicologosRepository";

const psicologosRouter = Router();

psicologosRouter.post('/', async(request, response)=>{
   try{ 
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


   const createPsicologo = new CreatePsicologoService();
    const psicologo = await createPsicologo.execute({
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

psicologosRouter.get('/', async(request, response)=>{
    const psicologoRepository = getCustomRepository(PsicologosRepository);
    const users = await psicologoRepository.find();

    return response.json(users);
})


/*
    BUSCA TODOS OS POSTS DE UM USUARIO PSICOLOGO
psicologosRouter.get('/:id', async(request, response)=>{

    const { id } = request.params;
    const psicologoRepository = getCustomRepository(PsicologosRepository);
    const postsRepository = getCustomRepository(PostsRepository);
    const users = await psicologoRepository.findOne({
        where: { id }
    });

    const posts = await postsRepository.find({
        where: { id_author: id }
    })

    return response.json({
        user: users,
        posts: posts
    });
}) */


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

     const updatePsicologoService = new UpdatePsicologoService();
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