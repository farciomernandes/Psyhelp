import User from '../models/User';
import ICreateUserDTO from '../interfaces/ICreateUserDTO';

export default class UsersRepository{
    private users: User[];

    constructor(){
        this.users = [];
    }

    public findByEmail(email: string): User | null{
        
        const checkEmail = this.users.find(user => user.email == email);
        
        return checkEmail || null;
    }


    public create({email, password, name, uf, year, sex}: ICreateUserDTO): User{
        
        const user = new User({
            name,
            email,
            password,
            year,
            uf,
            sex
        })

       
        this.users.push(user);
    
        return user;
    }

    public all(): User[]{
        return this.users;
    }

    
}