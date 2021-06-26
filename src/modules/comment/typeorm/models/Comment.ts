import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    JoinColumn, 
    ManyToOne
} from 'typeorm';
import Post from '../../../post/typeorm/models/Post';
import User from '../../../user/typeorm/models/User';



@Entity('comments')
class Comment {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    id_user: string;

    @ManyToOne(()=> User, user=> user.id)
    @JoinColumn( { name: "id_user" })
    author: User;

    @ManyToOne(()=> Post, post=> post.id)
    @JoinColumn( { name: "id_post" })
    post: Post;
    
    @Column()
    id_post: string;

    @Column()
    text: string;
  
}

export default Comment;