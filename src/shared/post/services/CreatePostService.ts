import Post from '../models/Post';

import PsicologosRepository from '../repositories/PostsRepository';

import ICreatePostDTO from '../interfaces/ICreatePostDTO';




class CreatePostService{
    private authorRepository: PsicologosRepository ;
    constructor(psicologoRepository: PsicologosRepository){
        this.authorRepository = psicologoRepository;
    }

    public execute({ idAuthor, category, text, title, crp, approved }: ICreatePostDTO): Post{


        const newPost = this.authorRepository.create({   
            idAuthor, 
            category, 
            text, 
            title, 
            crp,
            approved
        })

        return newPost;
    }
}

export default CreatePostService;