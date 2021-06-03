import Post from '../models/Post';
import ICreatePostDTO from '../interfaces/ICreatePostDTO';

interface IRequestDelete{
    idPost: string;
    idAuthor: string;
}


export default class PostsRepository{
    private posts: Post[];

    constructor(){
        this.posts = [];
    }

    public findById(id: string): number | null{
        
        const checkPost = this.posts.findIndex(post => post.id == id);
        
        return checkPost || null;
    }

    public findByCategory(category: string): Post[] | null{
        const filtredPosts = this.posts.filter((post)=> post.category == category);

        return filtredPosts || null;

    }


    public findAprovedd(): Post[] | null{
        const aproveddPosts = this.posts.filter((post)=> post.approved == true);

        return aproveddPosts || null;
    }

    public findNotAprovedd(): Post[] | null{
        const notAproveddPosts = this.posts.filter((post)=> post.approved == false);

        return notAproveddPosts || null;
    }

    public create({ crp, text, title ,category, idAuthor, approved }: ICreatePostDTO): Post{
        
        const post = new Post({
            idAuthor, 
            category, 
            text, 
            title, 
            crp,
            approved
        })

       
        this.posts.push(post);
    
        return post;
    }


    public toApprovePost({ crp, text, category, idAuthor, approved, id, title }: Post, position: number): Post{
        
        const aprovvedPost = {
            crp,
            text,
            category,
            idAuthor,
            approved: true,
            id,
            title
        }

        this.posts[position] = aprovvedPost;

        return aprovvedPost;
    }



    public delete({ idPost, idAuthor}: IRequestDelete, position: number): boolean{
        
        if(this.posts[position].idAuthor != idAuthor){
            throw new Error("You no have permission for delete this post!")
        }

        const newArray = this.posts.filter((index)=> index.id != idPost);


        this.posts = newArray;

        return true;

    }


    public all(): Post[]{
        return this.posts;
    }
  
}