import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Papers } from "./examsPapers";



@Injectable()
export class examsPapersservice{
    textbooksEntity: any;
    //deleteUser: any;
    constructor (
        @InjectRepository(Papers)
        private examsPapersRepository: Repository<Papers>,
 ) { }

 findAll(): Promise<Papers[]> {
return this.examsPapersRepository.find(); 
}

findOne (ID:number): Promise<Papers> {
    return this.examsPapersRepository.findOne({where:{ID:ID}});
}

create (user: Papers): Promise<Papers> {
    return this.examsPapersRepository.save(user);
}

async update (ID: number, user: Papers) {
    await this.examsPapersRepository.update(ID,user)
    }

deleteUser(ID: number){
        return this.examsPapersRepository.delete(ID);
     }
}

