import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Post from '../../../post/typeorm/models/Post';

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
    age: number;
    
    @Column()
    sex: string;

    // O contructor da classe é criado automaticamente pelo typeorm
}
export default User;