import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

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

    // O contructor da classe é criado automaticamente pelo typeorm
}
export default User;