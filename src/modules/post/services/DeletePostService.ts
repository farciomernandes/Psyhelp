import { getCustomRepository } from 'typeorm';

import PsicologosRepository from '../../psicologo/typeorm/repositories/PsicologosRepository';
import PostsRepository from '../repositories/PostsRepository';


interface IRequestDelete{
    idPost: string;
    id_author: string;
}



class DeletePostService{

    public async execute({id_author, idPost }: IRequestDelete): Promise<boolean>{
    const postsRepository = getCustomRepository(PostsRepository);
    const psicologosRepository = getCustomRepository(PsicologosRepository);


        const findIdForId = await postsRepository.findById(idPost);
        const findPsicologo = await psicologosRepository.findById(id_author);
        
        if(!findIdForId || !findPsicologo){
            throw new Error("Id and post is not matching!")
        }

        //const deletedPost = postsRepository.delete({ idAuthor, idPost });

        
        return true;
    }
}

export default DeletePostService;