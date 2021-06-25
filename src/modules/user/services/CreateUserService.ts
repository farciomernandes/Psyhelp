import User from '../typeorm/models/User';

import { getCustomRepository } from 'typeorm';

import UsersRepository from '../typeorm/repositories/UsersRepository';

import ICreateUserDTO from '../interfaces/ICreateUserDTO';




class CreateUserService{
    
    public async execute({email, password, name, year, sex, uf }: ICreateUserDTO): Promise<User>{
        
    const userRepository = getCustomRepository(UsersRepository);
        
        const findEmailForEmail = await userRepository.findByEmail(email);

        if(findEmailForEmail){
            throw new Error("Email adress already used!")
        }
    
        const newUser = userRepository.create({   
            email,
            password,
            name,
            year,
            uf,
            sex
        })

        await userRepository.save(newUser);

        return newUser;
    }
}

export default CreateUserService;