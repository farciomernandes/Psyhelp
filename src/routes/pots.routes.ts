import { Router } from 'express';
import { getCustomRepository } from 'typeorm';


import CreatePostService from '../modules/post/services/CreatePostService';
import AprovvedPostService from '../modules/post/services/AprovvedPostService';
import DeletePostService from '../modules/post/services/DeletePostService';



import PostsRepository from "../modules/post/typeorm/repositories/PostsRepository";


const postsRouter = Router();

postsRouter.post('/:id', async(request, response)=>{
   try{ 
       const {
        category, 
        text, 
        title, 
    } = request.body;

    const { id } = request.params;

   const createUser = new CreatePostService();
    
   const user = await createUser.execute({
        id_author: id, 
        category, 
        text, 
        title, 
    })

    return response.json(user);
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
})


postsRouter.put('/:id_psicologo', async(request, response)=>{
    try{ 
        const {
         id,
         
     } = request.body;

 
     const { id_psicologo } = request.params;
  
    const aprovvedPost = new AprovvedPostService();
     
    const aprovved = await aprovvedPost.execute({
         id,
         id_psicologo,
     })
 
     return response.json(aprovved);
     }catch(err){
         return response.status(400).json({ error: err.message})
     }
})


postsRouter.delete('/:id_author', async(request, response)=>{
    try{ 
        const { id } = request.body;
 
     const { id_author } = request.params;
 
    const deletePost = new DeletePostService();
     
    const deleted = await deletePost.execute({
         idPost: id,
         id_author: id_author,
     })
 
     return response.status(200).json(deleted);
     }catch(err){
         return response.status(400).json({ error: err.message})
     }
})

postsRouter.get('/', async (request, response)=>{
    const postsRepository = getCustomRepository(PostsRepository);
    const posts = await postsRepository.find();

    return response.json(posts);
})


postsRouter.get('/aprovved', async(request, response)=>{
    const postsRepository = getCustomRepository(PostsRepository);
    const pots = await postsRepository.findAprovedd();

    return response.json(pots);
})


postsRouter.get('/:category', async(request, response)=>{
    const postsRepository = getCustomRepository(PostsRepository);
    const { category } = request.params;
    const pots = await postsRepository.find({
        where: { category }
    });

    return response.json(pots);
})


export default postsRouter;