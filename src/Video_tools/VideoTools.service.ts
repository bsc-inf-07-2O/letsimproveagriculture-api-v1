import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { tutorialsEntity } from "./VideoTools";



@Injectable()
export class VideoToolsservice{
    textbooksEntity: any;
    constructor (
        @InjectRepository(tutorialsEntity)
        private VideoToolsRepository: Repository<tutorialsEntity>,
 ) { }

 findAll(): Promise<tutorialsEntity[]> {
return this.VideoToolsRepository.find(); 
}

findOne (ID:number): Promise<tutorialsEntity> {
    return this.VideoToolsRepository.findOne({where:{ID:ID}});
}

create (user: tutorialsEntity): Promise<tutorialsEntity> {
    return this.VideoToolsRepository.save(user);
}

async update (ID: number, user: tutorialsEntity) {
    await this.VideoToolsRepository.update(ID,user)
    }

    async remove (ID: number): Promise<void> {
        await this.VideoToolsRepository.delete(ID);

    }
}







    


