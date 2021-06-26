import { getCustomRepository } from 'typeorm';
import ICreateCommentDTO from '../interfaces/ICreateCommentDTO';

import PostsRepository from '../typeorm/repositories/CommentsRepository';


class DeletePostService{
    public execute({ id_post, id_user }: Omit<ICreateCommentDTO, "text">): boolean{
        
        const postsRepository = getCustomRepository(PostsRepository);
        
        const findIdForId = postsRepository.findByPost(id_post);
        
        if(!findIdForId){
            throw new Error("Post is not found!")
        }


        return true;
    }
}

export default DeletePostService;