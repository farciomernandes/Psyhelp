import { Router } from 'express';

import CreatePostService from '../shared/post/services/CreatePostService';
import AprovvedPostService from '../shared/post/services/AprovvedPostService';
import DeletePostService from '../shared/post/services/DeletePostService';



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

    const approved = false;

   const createUser = new CreatePostService(postsRepository);
    
   const user = createUser.execute({
        idAuthor: id, 
        category, 
        text, 
        title, 
        crp,
        approved
    })

    return response.json(user);
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
})


postsRouter.put('/:idAuthor', (request, response)=>{
    try{ 
        const {
         category, 
         text, 
         title, 
         crp,
         id,
     } = request.body;

     const approved = true;
 
     const { idAuthor } = request.params;
  
    const aprovvedPost = new AprovvedPostService(postsRepository);
     
    const aprovved = aprovvedPost.execute({
         approved,
         category,
         id,
         idAuthor,
         text,
         title,
         crp
     })
 
     return response.json(aprovved);
     }catch(err){
         return response.status(400).json({ error: err.message})
     }
})


postsRouter.delete('/:idAuthor', (request, response)=>{
    try{ 
        const { id } = request.body;
 
     const { idAuthor } = request.params;
 
    const deletePost = new DeletePostService(postsRepository);
     
    deletePost.execute({
         idPost: id,
         idAuthor,
     })
 
     return response.status(200).json({ message: "Post is deleted!"});
     }catch(err){
         return response.status(400).json({ error: err.message})
     }
})

postsRouter.get('/', (request, response)=>{
    const pots = postsRepository.all();

    return response.json(pots);
})


postsRouter.get('/aprovved', (request, response)=>{
    const pots = postsRepository.findAprovedd();

    return response.json(pots);
})


postsRouter.get('/notaprovved', (request, response)=>{
    const pots = postsRepository.findNotAprovedd();

    return response.json(pots);
})

postsRouter.post('/')

export default postsRouter;