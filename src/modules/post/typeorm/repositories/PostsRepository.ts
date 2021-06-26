import { EntityRepository, Repository } from 'typeorm';

import Post from '../models/Post';



@EntityRepository(Post)
export default class PostsRepository extends Repository<Post>{

 
    public async findById(id: string): Promise<Post | null>{
        const checkUser = await this.findOne({
            where: { id }
        });

        return checkUser || null;
    }
    public async findByCategory(category: string): Promise<Post[] | null>{

        const filtredPosts = this.find({
            where: { category }
        })

        return filtredPosts || null;

    }


    public async findAprovedd(): Promise<Post[] | null>{

        const aproveddPosts = await this.find({
            where: { approved: 1 }
        })

        return aproveddPosts || null;
    }

    public async findNotAprovedd(): Promise<Post[] | null>{

        const notAproveddPosts = this.find({
            where: { approved: 0 }
        })

        return notAproveddPosts || null;
    }

}