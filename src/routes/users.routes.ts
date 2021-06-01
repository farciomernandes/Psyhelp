import { Router } from 'express';

import CreateUserService from '../models/user/services/CreateUserService';


import UsersRepository from "../models/user/repositories/UsersRepository";
const userRepository = new UsersRepository();

const usersRouter = Router();

usersRouter.post('/', (request, response)=>{
   try{ const {
        email,
        password,
        name,
        year,
        uf,
        sex
    } = request.body;


   const createUser = new CreateUserService(userRepository);
    const user = createUser.execute({
        email,
        password,
        name,
        year,
        uf,
        sex
    })

    return response.json(user);
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
})

usersRouter.get('/', (request, response)=>{
    const users = userRepository.all();

    return response.json(users);
})

usersRouter.post('/')

export default usersRouter;