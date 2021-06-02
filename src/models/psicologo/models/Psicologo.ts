import { uuid } from "uuidv4";

interface IPsicologo {
    id: string;
    name: string;
    email: string;
    password: string;
    uf: string;
    year: number;
    sex: string;
    crp: string;

}

export default class Psicologo {
    id: string;
    name: string;
    email: string;
    password: string;
    uf: string;
    year: number;
    sex: string;
    crp: string;

    constructor({email, password, name, year, uf, sex, crp}: Omit<IPsicologo, "id">){
        this.id = uuid();
        this.email = email;
        this.password = password;
        this.name = name;
        this.year = year;
        this.uf = uf;
        this.sex = sex;
        this.crp = crp;
    }
}