import Psicologo from '../models/Psicologo';

import PsicologosRepository from '../repositories/PsicologosRepository';

import IUpdatePsicologoDTO from '../interfaces/IUpdatePsicologoDTO';




class UpdatePsicologoDTO{
    private psicologoRepository: PsicologosRepository ;
    constructor(psicologoRepository: PsicologosRepository){
        this.psicologoRepository = psicologoRepository;
    }

    public execute({email, password, name, year, sex, uf, crp, id }: IUpdatePsicologoDTO): Psicologo{
        const findIdForId = this.psicologoRepository.findById(id);
        
        if(findIdForId < 0){
            throw new Error("Id is not found!")
        }
    
        const updatedPsicologo = this.psicologoRepository.update({   
            email,
            password,
            name,
            year,
            uf,
            sex,
            crp,
            id,
        },
        findIdForId
        )

        return updatedPsicologo;
    }
}

export default UpdatePsicologoDTO;