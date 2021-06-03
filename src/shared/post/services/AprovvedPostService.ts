import Post from '../models/Post';

import PostsRepository from '../repositories/PostsRepository';

import IAprovvedPostDTO from '../interfaces/IAprovvedPostDTO';




class AprovvedPostService{
    private postsRepository: PostsRepository;
    constructor(postsRepository: PostsRepository){
        this.postsRepository = postsRepository;
    }

    public execute({ 
        id,
        approved,
        category,
        idAuthor,
        text,
        title,
        crp 
    }: IAprovvedPostDTO): Post{
        const findIdForId = this.postsRepository.findById(id);
        
        if(findIdForId < 0){
            throw new Error("Id is not found!")
        }

        const aprovvedPost= this.postsRepository.toApprovePost({   
            id,
            approved,
            category,
            idAuthor,
            text,
            title,
            crp
        },
        findIdForId
        )

        return aprovvedPost;
    }
}

export default AprovvedPostService;