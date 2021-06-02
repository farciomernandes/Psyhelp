import Post from '../models/Post';
import ICreatePostDTO from '../interfaces/ICreatePostDTO';


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

    public create({crp, text, title ,category, idAuthor}: ICreatePostDTO): Post{
        
        const post = new Post({
            idAuthor, 
            category, 
            text, 
            title, 
            crp,

        })

       
        this.posts.push(post);
    
        return post;
    }


    public all(): Post[]{
        return this.posts;
    }
  
}