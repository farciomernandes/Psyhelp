import { getCustomRepository } from 'typeorm';

import PsicologosRepository from '../typeorm/repositories/PsicologosRepository';




class DeletePsicologoDTO{

    public async execute(id: string): Promise<void>{
        
        const psicologoRepository = getCustomRepository(PsicologosRepository);
        
        const findIdForId = await psicologoRepository.findById(id);
        
        if(!findIdForId){
            throw new Error("Id is not found!")
        }
    
    

        await psicologoRepository.delete(findIdForId);

    }
}

export default DeletePsicologoDTO;