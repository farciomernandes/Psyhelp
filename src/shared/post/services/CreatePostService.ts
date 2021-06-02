import Post from '../models/Post';

import PsicologosRepository from '../repositories/PostsRepository';

import ICreatePostDTO from '../interfaces/ICreatePostDTO';




class CreatePostService{
    private authorRepository: PsicologosRepository ;
    constructor(psicologoRepository: PsicologosRepository){
        this.authorRepository = psicologoRepository;
    }

    public execute({ idAuthor, category, text, title, crp }: ICreatePostDTO): Post{


        const newPost = this.authorRepository.create({   
            idAuthor, 
            category, 
            text, 
            title, 
            crp,
        })

        return newPost;
    }
}

export default CreatePostService;