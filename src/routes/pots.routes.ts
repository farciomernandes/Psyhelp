import { Router } from 'express';

import CreatePostService from '../shared/post/services/CreatePostService';


import PostsRepository from "../shared/post/repositories/PostsRepository";

const postsRepository = new PostsRepository();

const postsRouter = Router();

postsRouter.post('/:id', (request, response)=>{
   try{ 
       const {
        category, 
        text, 
        title, 
        crp
    } = request.body;

    const { id } = request.params;


   const createUser = new CreatePostService(postsRepository);
    const user = createUser.execute({
        idAuthor: id, 
        category, 
        text, 
        title, 
        crp
    })

    return response.json(user);
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
})

postsRouter.get('/', (request, response)=>{
    const pots = postsRepository.all();

    return response.json(pots);
})

postsRouter.post('/')

export default postsRouter;