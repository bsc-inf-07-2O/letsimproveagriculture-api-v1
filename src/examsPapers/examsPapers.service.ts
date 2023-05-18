import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PastPapersEntity } from "./examsPapers";



@Injectable()
export class examsPapersservice{
    textbooksEntity: any;
    constructor (
        @InjectRepository(PastPapersEntity)
        private examsPapersRepository: Repository<PastPapersEntity>,
 ) { }

 findAll(): Promise<PastPapersEntity[]> {
return this.examsPapersRepository.find(); 
}

findOne (ID:number): Promise<PastPapersEntity> {
    return this.examsPapersRepository.findOne({where:{ID:ID}});
}

create (user: PastPapersEntity): Promise<PastPapersEntity> {
    return this.examsPapersRepository.save(user);
}

async update (ID: number, user: PastPapersEntity) {
    await this.examsPapersRepository.update(ID,user)
    }

    async remove (ID: number): Promise<void> {
        await this.examsPapersRepository.delete(ID);

    }
}

