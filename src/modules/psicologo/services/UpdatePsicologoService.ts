import { getCustomRepository } from 'typeorm';

import Psicologo from '../typeorm/models/Psicologo';
import PsicologosRepository from '../typeorm/repositories/PsicologosRepository';
import IUpdatePsicologoDTO from '../interfaces/IUpdatePsicologoDTO';




class UpdatePsicologoDTO{

    public async execute({email, password, name, year, sex, uf, crp,  phone, city, description, 
        speciality, id }: IUpdatePsicologoDTO): Promise<Psicologo>{
        
        const psicologoRepository = getCustomRepository(PsicologosRepository);
        
        const findIdForId = await psicologoRepository.findById(id);
        
        if(!findIdForId){
            throw new Error("Id is not found!")
        }
    
        const updatedPsicologo = psicologoRepository.create({   
            ...findIdForId,
            id,
            email,
            password,
            name,
            year,
            uf,
            sex,
            crp,
            phone,
            city,
            description, 
            speciality
        })

        await psicologoRepository.save(updatedPsicologo);

        return updatedPsicologo;
    }
}

export default UpdatePsicologoDTO;