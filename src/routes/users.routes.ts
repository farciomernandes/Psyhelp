import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateUserService from '../modules/user/services/CreateUserService';
import UpdateUserService from '../modules/user/services/UpdateUserService';



import UsersRepository from "../modules/user/typeorm/repositories/UsersRepository";

const usersRouter = Router();

usersRouter.post('/', async(request, response)=>{
   try{ 
       const {
        email,
        password,
        name,
        year,
        uf,
        sex,

    } = request.body;


   const createUser = new CreateUserService();
    const user = await createUser.execute({
        email,
        password,
        name,
        year,
        uf,
        sex,
    })

    return response.json(user);
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
}) //Is working

usersRouter.get('/', async(request, response)=>{
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();
    

    return response.json(users);
}) //Is working

usersRouter.put('/:id', async(request, response)=>{
    const { id } = request.params;
    const { 
        email,
        password,
        name,
        year,
        uf,
        sex
     } = request.body;

     const updateUserService = new UpdateUserService();
    try{

        const psicologo = await updateUserService.execute({
            email,
            password,
            name,
            year,
            uf,
            sex,
            id
     })
     return response.status(200).json(psicologo)

    }catch(err){
        return response.status(400).json({ error: err.message})
    }
    

     
})


export default usersRouter;