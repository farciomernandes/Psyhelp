import PostsRepository from '../repositories/CommentsRepository';


interface IRequestDelete{
    idPost: string;
    idAuthor: string;
}



class DeletePostService{
    private postsRepository: PostsRepository ;
    constructor(postsRepository: PostsRepository){
        this.postsRepository = postsRepository;
    }

    public execute({idAuthor, idPost }: IRequestDelete): boolean{
        const findIdForId = this.postsRepository.findByPost(idPost);
        
        if(findIdForId < 0){
            throw new Error("Id is not found!")
        }

        const deletedPost = this.postsRepository.delete({ idAuthor, idPost }, findIdForId);

        
        return true;
    }
}

export default DeletePostService;