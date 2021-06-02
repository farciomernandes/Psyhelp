import Psicologo from '../models/Psicologo';
import ICreatePsicologoDTO from '../interfaces/ICreatePsicologoDTO';
import IUpdatePsicologoDTO from '../interfaces/IUpdatePsicologoDTO';


export default class PsicologosRepository{
    private psicologos: Psicologo[];

    constructor(){
        this.psicologos = [];
    }

    public findByEmail(email: string): Psicologo | null{
        
        const checkEmail = this.psicologos.find(user => user.email == email);
        
        return checkEmail || null;
    }


    public findById(id: string): number{
        
        const checkUser = this.psicologos.findIndex(user => user.id == id);

        return checkUser;
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


    public update({email, password, name, uf, year, sex, crp, id}: IUpdatePsicologoDTO, position: number): Psicologo{
        
        const newPsicologo = {
            email,
            password,
            name,
            uf,
            year,
            sex,
            id,
            crp
        }

        this.psicologos[position] = newPsicologo;

        return newPsicologo;
    }


    public all(): Psicologo[]{
        return this.psicologos;
    }

    
}