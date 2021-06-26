import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import Comment from '../../../comment/typeorm/models/Comment';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @Column()
    uf: string;

    @Column("decimal")
    year: number;
    
    @Column()
    sex: string;

    @OneToMany(()=> Comment, comment=>comment.id_user)
    @JoinColumn( { name: "id" } )
    comments: Comment[]

    // O contructor da classe é criado automaticamente pelo typeorm
}
export default User;