import { getCustomRepository } from 'typeorm';
import ICreateCommentDTO from '../interfaces/ICreateCommentDTO';

import Comment from '../typeorm/models/Comment';
import CommentsRepository from '../typeorm/repositories/CommentsRepository';

class CreateCommentService{

    public async execute({ id_user, id_post, text }: ICreateCommentDTO): Promise<Comment>{
        const commentRepository = getCustomRepository(CommentsRepository);

       
        const newPost = commentRepository.create({
            id_post,
            id_user,
            text
        })

        await commentRepository.save(newPost);

        return newPost;
    }
}

export default CreateCommentService;