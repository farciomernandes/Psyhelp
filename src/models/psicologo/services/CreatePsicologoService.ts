import Psicologo from '../models/Psicologo';

import PsicologosRepository from '../repositories/PsicologosRepository';

import ICreatePsicologoDTO from '../interfaces/ICreatePsicologoDTO';




class CreateUserService{
    private psicologoRepository: PsicologosRepository ;
    constructor(psicologoRepository: PsicologosRepository){
        this.psicologoRepository = psicologoRepository;
    }

    public execute({email, password, name, year, sex, uf, crp }: ICreatePsicologoDTO): Psicologo{
        const findEmailForEmail = this.psicologoRepository.findByEmail(email);
        if(findEmailForEmail){
            throw new Error("Email adress already used!")
        }
    
        const newUser = this.psicologoRepository.create({   
            email,
            password,
            name,
            year,
            uf,
            sex,
            crp
        })

        return newUser;
    }
}

export default CreateUserService;