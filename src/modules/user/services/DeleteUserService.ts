import { getCustomRepository } from 'typeorm';

import UsersRepository from '../typeorm/repositories/UsersRepository';




class DeleteUserService{
   

    public async execute( id: string ): Promise<void>{
       const userRepository = getCustomRepository(UsersRepository);
        
        const findIdForId = await userRepository.findById(id);
        
        if(findIdForId == null){
            throw new Error("User not found!")
        }

        await userRepository.delete(findIdForId);        
    
        //await userRepository.save(updatedUser);

    }
}

export default DeleteUserService;