import User from '../typeorm/models/User';
import { getCustomRepository, Repository } from 'typeorm';

import UsersRepository from '../typeorm/repositories/UsersRepository';

import IUpdateUserDTO from '../interfaces/IUpdateUserDTO';




class UpdateUserService{
   

    public async execute({email, password, name, year, sex, uf, id }: IUpdateUserDTO): Promise<User>{
       const userRepository = getCustomRepository(UsersRepository);
        
        const findIdForId = await userRepository.findById(id);
        
        if(findIdForId == null){
            throw new Error("Id is not found!")
        }

        const updatedUser = {
            ...findIdForId,
            id, 
            email,
            password,
            name, 
            year, 
            sex, 
            uf
        }

    
        await userRepository.save(updatedUser);

        return updatedUser;
    }
}

export default UpdateUserService;