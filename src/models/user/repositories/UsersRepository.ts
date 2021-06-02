import User from '../models/User';
import ICreateUserDTO from '../interfaces/ICreateUserDTO';
import IUpdateUserDTO from '../interfaces/IUpdateUserDTO';

export default class UsersRepository{
    private users: User[];

    constructor(){
        this.users = [];
    }

    public findByEmail(email: string): User | null{
        
        const checkEmail = this.users.find(user => user.email == email);
        
        return checkEmail || null;
    }

    public findById(id: string): number{
        
        const checkUser = this.users.findIndex(user => user.id == id);

        return checkUser;
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

    public update({email, password, name, uf, year, sex, id}: IUpdateUserDTO, position: number): User{
        
        const newUser = {
            email,
            password,
            name,
            uf,
            year,
            sex,
            id,
        }

        this.users[position] = newUser;

        return newUser;
    }

    public all(): User[]{
        return this.users;
    }

    
}