import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

import Psicologo from '../../../psicologo/typeorm/models/Psicologo';

import Comment from '../../../comment/typeorm/models/Comment';

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


    @ManyToOne(()=> Psicologo)
    @JoinColumn({ name: "id_author"})
    author: Psicologo;

    @Column()
    category: string;

    @Column()
    approved: number;

    @OneToMany(()=> Comment, comment=>comment.id_post)
    @JoinColumn( { name: "id" } )
    comments: Comment[]

}

export default Post;