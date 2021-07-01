import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

import Psicologo from '../../../psicologo/typeorm/models/Psicologo';
import User from '../../../user/typeorm/models/User';

@Entity('posts')
class Post {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    id_author: string;

    @Column()
    category: string;

    @Column()
    approved: number;

}

export default Post;