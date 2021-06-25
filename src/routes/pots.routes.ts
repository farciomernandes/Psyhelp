import { Router } from 'express';
import { getCustomRepository } from 'typeorm';


import CreatePostService from '../modules/post/services/CreatePostService';
import AprovvedPostService from '../modules/post/services/AprovvedPostService';
import DeletePostService from '../modules/post/services/DeletePostService';



import PostsRepository from "../modules/post/repositories/PostsRepository";


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


postsRouter.delete('/:idAuthor', async(request, response)=>{
    try{ 
        const { id } = request.body;
 
     const { idAuthor } = request.params;
 
    const deletePost = new DeletePostService();
     
    await deletePost.execute({
         idPost: id,
         id_author: idAuthor,
     })
 
     return response.status(200).json({ message: "Post is deleted!"});
     }catch(err){
         return response.status(400).json({ error: err.message})
     }
})

postsRouter.get('/', async (request, response)=>{
    const postsRepository = getCustomRepository(PostsRepository);
    const pots = await postsRepository.find();

    return response.json(pots);
})


postsRouter.get('/aprovved', async(request, response)=>{
    const postsRepository = getCustomRepository(PostsRepository);
    const pots = await postsRepository.findAprovedd();

    return response.json(pots);
})


postsRouter.get('/notaprovved', async(request, response)=>{
    const postsRepository = getCustomRepository(PostsRepository);

    const pots = await postsRepository.findNotAprovedd();

    return response.json(pots);
})


export default postsRouter;