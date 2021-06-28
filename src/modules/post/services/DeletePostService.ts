import { getCustomRepository } from 'typeorm';


import PostsRepository from '../typeorm/repositories/PostsRepository';


interface IRequestDelete{
    idPost: string;
    id_author: string;
}



class DeletePostService{

    public async execute({id_author, idPost }: IRequestDelete): Promise<void>{
    const postsRepository = getCustomRepository(PostsRepository);

        const findIdForId = await postsRepository.findById(idPost);

        
        if(!findIdForId){
            throw new Error("Id and post is not matching!")
        }

        if(findIdForId.id_author != id_author){
            throw new Error("Id and post is not matching!")
        }

        await postsRepository.delete(findIdForId);

    }
}

export default DeletePostService;