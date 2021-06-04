import Comment from '../models/Comment';

import CommentsRepository from '../repositories/CommentsRepository';

import ICreateCommentDTO from '../interfaces/ICreateCommentDTO';




class CreateCommentService{
    private commentRepository: CommentsRepository ;
    constructor(psicologoRepository: CommentsRepository){
        this.commentRepository = psicologoRepository;
    }

    public execute({ idUser, idPost, text }: ICreateCommentDTO): Omit<Comment, "id">{


        const newPost = this.commentRepository.create({   
            idUser, 
            idPost, 
            text
        })

        return newPost;
    }
}

export default CreateCommentService;