import Comment from '../models/Comment';
import ICreatePostDTO from '../interfaces/ICreateCommentDTO';

interface IRequestDelete{
    idPost: string;
    idAuthor: string;
}


export default class CommentsRepository{
    private coments: Comment[];

    constructor(){
        this.coments = [];
    }

    public findByPost(idPost: string): number{
        const checkPost = this.coments.findIndex(post => post.id == idPost);
        
        return checkPost;
    }


    public create({ text, idPost, idUser }: ICreatePostDTO): Omit<Comment, "id">{
        
        const post = new Comment({
            text, 
            idPost, 
            idUser
        })

       
        this.coments.push(post);
    
        return post;
    }

    public delete({ idPost, idAuthor }: IRequestDelete, position: number): boolean{
        
        if(this.coments[position].idUser != idAuthor){
            throw new Error("You no have permission for delete this comment!")
        }

        const newArray = this.coments.filter((index)=> index.id != idPost);


        this.coments = newArray;

        return true;

    }


    public all(): Comment[]{
        return this.coments;
    }
  
}