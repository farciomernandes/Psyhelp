import { Router } from 'express';

import CreateCommentService from '../modules/comment/services/CreateCommentService';
import DeleteCommentService from '../modules/comment/services/DeleteCommentService';



import CommentsRepository from "../modules/comment/repositories/CommentsRepository";

const commentsRepository = new CommentsRepository();

const commentsRouter = Router();

commentsRouter.post('/:idUser', (request, response)=>{
   try{ 
       const {
        idPost,
        text
    } = request.body;

    const { idUser } = request.params;

   const createComment = new CreateCommentService(commentsRepository);
    
   const comment = createComment.execute({
        idPost,
        idUser,
        text
    })

    return response.json(comment);
    }catch(err){
        return response.status(400).json({ error: err.message})
    }
})

commentsRouter.delete('/:idAuthor', (request, response)=>{
    try{ 
        const { id } = request.body;
 
     const { idAuthor } = request.params;
 
    const deletePost = new DeleteCommentService(commentsRepository);
     
    deletePost.execute({
         idPost: id,
         idAuthor,
     })
 
     return response.status(200).json({ message: "Comment is deleted!"});
     }catch(err){
         return response.status(400).json({ error: err.message})
     }
})

commentsRouter.get('/', (request, response)=>{
    const comments = commentsRepository.all();

    return response.json(comments);
})


export default commentsRouter;