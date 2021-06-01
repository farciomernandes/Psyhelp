import { uuid } from "uuidv4";
import IUser from "../interfaces/iUser";

export default class User {
    id: string;
    name: string;
    email: string;
    password: string;
    uf: string;
    year: number;
    sex: string;

    constructor({email, password, name, year, uf, sex}: Omit<IUser, "id">){
        this.id = uuid();
        this.email = email;
        this.password = password;
        this.name = name;
        this.year = year;
        this.uf = uf;
        this.sex = sex;
    }
}