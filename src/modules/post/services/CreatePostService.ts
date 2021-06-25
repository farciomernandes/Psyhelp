import { getCustomRepository } from 'typeorm';

import Post from '../models/Post';

import ICreatePostDTO from '../interfaces/ICreatePostDTO';
import PostsRepository from '../repositories/PostsRepository';




class CreatePostService{

    public async execute({ id_author, category, text, title }: ICreatePostDTO): Promise<Post>{
        const postsRepository = getCustomRepository(PostsRepository);


        const newPost = postsRepository.create({   
            approved: 0,
            category,
            id_author,
            text,
            title,
        })

        await postsRepository.save(newPost);

        return newPost;
    }
}

export default CreatePostService;