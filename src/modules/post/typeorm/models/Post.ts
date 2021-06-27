import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

import Psicologo from '../../../psicologo/typeorm/models/Psicologo';

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

}

export default Post;