import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateCommentService from '../modules/comment/services/CreateCommentService';
import DeleteCommentService from '../modules/comment/services/DeleteCommentService';



import CommentsRepository from "../modules/comment/typeorm/repositories/CommentsRepository";


const commentsRouter = Router();

commentsRouter.post('/:id_user', async(request, response)=>{
   try{ 
       const {
        id_post,
        text
    } = request.body;

    const { id_user } = request.params;

   const createComment = new CreateCommentService();
    
   const comment = await createComment.execute({
        id_post,
        id_user,
        text
    })

    return response.json(comment);
    
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
})

commentsRouter.delete('/:id_user', (request, response)=>{
    try{ 
        const { id } = request.body;
 
     const { id_user } = request.params;
 
    const deletePost = new DeleteCommentService();
     
    deletePost.execute({
         id_post: id,
         id_user,
     })
 
     return response.status(200).json({ message: "Comment is deleted!"});
     }catch(err){
         return response.status(400).json({ error: err.message})
     }
})

commentsRouter.get('/', async(request, response)=>{
    const commentsRepository = getCustomRepository(CommentsRepository);
    const comments = await commentsRepository.find();

    return response.json(comments);
})


export default commentsRouter;