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
    phone: number;
    city: string;
    description: string;
    speciality: string;

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
    phone: number;
    city: string;
    description: string;
    speciality: string;


    constructor({email, password, name, year, uf, sex, crp, phone, city, description, speciality }: Omit<IPsicologo, "id">){
        this.id = uuid();
        this.email = email;
        this.password = password;
        this.name = name;
        this.year = year;
        this.uf = uf;
        this.sex = sex;
        this.crp = crp;
        this.phone = phone;
        this.city = city;
        this.description = description;
        this.speciality = speciality;
    }
}