import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { textbooksEntity } from './learningTools';
import { Column, PrimaryGeneratedColumn, Repository } from "typeorm";


@Injectable()
export class learningToolsservice{
    textbooksEntity: any;
    constructor (
        @InjectRepository(textbooksEntity)
        private learningToolsRepository: Repository<textbooksEntity>,
 ) { }

 findAll(): Promise<textbooksEntity[]> {
return this.learningToolsRepository.find(); 
}

findOne (ID:number): Promise<textbooksEntity> {
    return this.learningToolsRepository.findOne({where:{ID:ID}});
}

create (user: textbooksEntity): Promise<textbooksEntity> {
    return this.learningToolsRepository.save(user);
}

async update (ID: number, user: textbooksEntity) {
    await this.learningToolsRepository.update(ID,user)
    }

deleteUser(id: number){
    return this.learningToolsRepository.delete(id);
 }
}

