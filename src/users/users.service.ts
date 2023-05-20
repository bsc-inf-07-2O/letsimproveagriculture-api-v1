import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  update: any;
  remove: any;
  createUser: any;
  findUser: any;
    UpdateUser: any;
  constructor(@InjectRepository(User) private usersRepository:Repository<User>){
  }

  async addUser(createUserDto:CreateUserDto):Promise<User>{
    const newUser = this.usersRepository.create(createUserDto);
    newUser.password = await bcrypt.hash(newUser.password,255);
    return newUser.save();
  }

  findAll(): Promise<User[]> {
     return this.usersRepository.find(); 
  }

  findOne (id:number): Promise<any> {
      return this.usersRepository.findOne({where:{id}});
  }

  create (user: User): Promise<User> {
    return this.usersRepository.save(user);
}

  async showById(id: number): Promise<User>{ 
    const user = await this.findById(id);

    delete user.password
    return user;
}

async findById(id: number){
  return await User.findOne(id);

}

deleteUser(id: number){
    return this.usersRepository.delete({id});
 }
}

  


