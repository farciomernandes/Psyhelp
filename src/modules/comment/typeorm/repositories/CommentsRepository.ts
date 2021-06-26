import { EntityRepository, Repository, getCustomRepository } from 'typeorm';

import PostsRepository from '../../../post/typeorm/repositories/PostsRepository';
import Post from '../../../post/typeorm/models/Post';
import Comment from '../models/Comment';

@EntityRepository(Comment)
class CommentsRepository extends Repository<Comment>{
    private postRepository = getCustomRepository(PostsRepository);

    public async findByPost(id_post: string): Promise<Post | null>{
        
        const checkPost = await this.postRepository.findOne({
            where: { id: id_post }
        })

        return checkPost || null;
    }

}

export default CommentsRepository;