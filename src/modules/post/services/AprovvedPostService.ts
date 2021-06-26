import { getCustomRepository } from 'typeorm';

import Post from '../typeorm/models/Post';

import PostsRepository from '../typeorm/repositories/PostsRepository';
import PsicologosRepository from '../../psicologo/typeorm/repositories/PsicologosRepository';

import IAprovvedPostDTO from '../interfaces/IAprovvedPostDTO';




class AprovvedPostService{
    public async execute({ 
        id,
        id_psicologo
    }: IAprovvedPostDTO): Promise<Post>{

    const postsRepository = getCustomRepository(PostsRepository);
    const psicologosRepository = getCustomRepository(PsicologosRepository);


    const findIdForId = await postsRepository.findById(id);
    const findPsicologo = await psicologosRepository.findById(id_psicologo);
    
    if(!findIdForId || !findPsicologo){
        throw new Error("Id and author is not matching!");
    }

        const aprovedpost = await postsRepository.create({
            ...findIdForId,
            approved: 1,
        });


        await postsRepository.save(aprovedpost);

        return aprovedpost;
    }
}

export default AprovvedPostService;