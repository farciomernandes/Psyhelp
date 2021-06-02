import User from '../models/User';

import UsersRepository from '../repositories/UsersRepository';

import IUpdateUserDTO from '../interfaces/IUpdateUserDTO';




class UpdateUserService{
    private userRepository: UsersRepository ;
    constructor(userRepository: UsersRepository){
        this.userRepository = userRepository;
    }

    public execute({email, password, name, year, sex, uf, id }: IUpdateUserDTO): User{
        const findIdForId = this.userRepository.findById(id);
        
        if(findIdForId < 0){
            throw new Error("Id is not found!")
        }
    
        const updatedPsicologo = this.userRepository.update({   
            email,
            password,
            name,
            year,
            uf,
            sex,
            id,
        },
        findIdForId
        )

        return updatedPsicologo;
    }
}

export default UpdateUserService;