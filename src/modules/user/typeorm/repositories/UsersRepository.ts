import User from '../models/User';
import { EntityRepository, Repository } from 'typeorm';


@EntityRepository(User)
class UsersRepository extends Repository<User>{
    

    public async findByEmail(email: string): Promise<User | null>{
        
        const findEmail = await this.findOne({
            where: { email }
        })
        
        return findEmail || null;
    }
    

    public async findById(id: string): Promise<User | null>{

        const findUser = await this.findOne({
            where: { id },
        })

        return findUser || null;
    }

   /* public update({email, password, name, uf, year, sex, id}: IUpdateUserDTO, position: number): User{
        const newUser = {
            email,
            password,
            name,
            uf,
            year,
            sex,
            id,
        }
        this.users[position] = newUser;
        return newUser;
    } */

    
}

export default UsersRepository;