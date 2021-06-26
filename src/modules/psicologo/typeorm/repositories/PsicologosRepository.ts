import { EntityRepository, Repository } from 'typeorm';

import Psicologo from '../models/Psicologo';


@EntityRepository(Psicologo)
class PsicologosRepository extends Repository<Psicologo>{
   
    public async findByEmail(email: string): Promise<Psicologo | null>{
        
        const checkEmail = await this.findOne({
            where: {email}
        });

        return checkEmail || null;
    }

    public async findById(id: string): Promise<Psicologo | null>{
        const checkCrp = await this.findOne({
            where: {id}
        });

        return checkCrp || null;
    }

}

export default PsicologosRepository;