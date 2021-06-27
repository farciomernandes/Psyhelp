import User from '../../modules/user/typeorm/models/User';
import Psicologo from '../../modules/psicologo/typeorm/models/Psicologo';


import { getCustomRepository } from 'typeorm';

import UsersRepository from '../../modules/user/typeorm/repositories/UsersRepository';
import PsicologosRepository from '../../modules/psicologo/typeorm/repositories/PsicologosRepository';



interface IAuthenticate{
    email: string;
    password: string;
}


class AuthenticateService{
    
    public async execute({email, password }: IAuthenticate): Promise<any>{
        
    const userRepository = getCustomRepository(UsersRepository);
    const psicologoRepository = getCustomRepository(PsicologosRepository);

        
        const findUserEmail = await userRepository.findByEmail(email);
        const findPsicologoEmaik = await psicologoRepository.findByEmail(email);


        if(!findUserEmail && !findPsicologoEmaik){
            throw new Error("User is not exist")
        }

        if(findUserEmail){
            if(findUserEmail.password == password){
                return findUserEmail;
            }else{
                throw new Error("Invalid credentials")
            }     
        }

        if(findPsicologoEmaik){
            if(findPsicologoEmaik.password == password){
                return findPsicologoEmaik;
            }else{
                throw new Error("Invalid credentials")
            }   
        }

    }
}

export default AuthenticateService;