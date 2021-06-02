import { Router } from 'express';

import CreateUserService from '../models/user/services/CreateUserService';
import UpdateUserService from '../models/user/services/UpdateUserService';



import UsersRepository from "../models/user/repositories/UsersRepository";

const usersRepository = new UsersRepository();

const usersRouter = Router();

usersRouter.post('/', (request, response)=>{
   try{ 
       const {
        email,
        password,
        name,
        year,
        uf,
        sex,

    } = request.body;


   const createUser = new CreateUserService(usersRepository);
    const user = createUser.execute({
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
})

usersRouter.get('/', (request, response)=>{
    const users = usersRepository.all();

    return response.json(users);
})

usersRouter.post('/')

usersRouter.put('/:id', (request, response)=>{
    const { id } = request.params;

    const { 
        email,
        password,
        name,
        year,
        uf,
        sex,
        crp
     } = request.body;

     const updateUserService = new UpdateUserService(usersRepository);
    try{
        const psicologo = updateUserService.execute({
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