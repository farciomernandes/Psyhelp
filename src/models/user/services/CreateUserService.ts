import User from '../models/User';

import UsersRepository from '../repositories/UsersRepository';

import ICreateUserDTO from '../interfaces/ICreateUserDTO';




class CreateUserService{
    private userRepository: UsersRepository ;
    
    constructor(userRepository: UsersRepository){
        this.userRepository = userRepository;
    }

    public execute({email, password, name, year, sex, uf }: ICreateUserDTO): User{
        const findEmailForEmail = this.userRepository.findByEmail(email);
        if(findEmailForEmail){
            throw new Error("Email adress already used!")
        }
    
        const newUser = this.userRepository.create({   
            email,
            password,
            name,
            year,
            uf,
            sex
        })

        return newUser;
    }
}

export default CreateUserService;