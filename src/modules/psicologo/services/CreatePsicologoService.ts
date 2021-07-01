import { getCustomRepository } from 'typeorm';

import Psicologo from '../typeorm/models/Psicologo';
import PsicologosRepository from '../typeorm/repositories/PsicologosRepository';
import ICreatePsicologoDTO from '../interfaces/ICreatePsicologoDTO';




class CreateUserService{
    public async execute({email, password, name, year, sex, uf, crp, phone, city, description, 
        speciality }: ICreatePsicologoDTO): Promise<Psicologo>{
        
        const psicologoRepository = getCustomRepository(PsicologosRepository);
    
        const findEmailForEmail = await psicologoRepository.findByEmail(email);
        
        if(findEmailForEmail){
            throw new Error("Email adress already used!")
        }
    
        const newUser = psicologoRepository.create({   
            email,
            password,
            name,
            age: year,
            uf,
            sex,
            crp,
            phone,
            city,
            description, 
            speciality
        });

        await psicologoRepository.save(newUser);

        return newUser;
    }
}

export default CreateUserService;