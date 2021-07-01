import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import Post from '../../../post/typeorm/models/Post';


@Entity('psicologos')
class Psicologo {

    @PrimaryGeneratedColumn("uuid")
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

    @Column()
    crp: string;

    @Column("decimal")
    phone: number;

    @Column()
    city: string;

    @Column()
    description: string;
    
    @Column()
    speciality: string;
}

export default Psicologo;