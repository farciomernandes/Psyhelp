import Psicologo from '../models/Psicologo';
import ICreatePsicologoDTO from '../interfaces/ICreatePsicologoDTO';

export default class PsicologosRepository{
    private psicologos: Psicologo[];

    constructor(){
        this.psicologos = [];
    }

    public findByEmail(email: string): Psicologo | null{
        
        const checkEmail = this.psicologos.find(user => user.email == email);
        
        return checkEmail || null;
    }


    public create({email, password, name, uf, year, sex, crp}: ICreatePsicologoDTO): Psicologo{
        
        const psicologo = new Psicologo({
            name,
            email,
            password,
            year,
            uf,
            sex,
            crp
        })

       
        this.psicologos.push(psicologo);
    
        return psicologo;
    }

    public all(): Psicologo[]{
        return this.psicologos;
    }

    
}