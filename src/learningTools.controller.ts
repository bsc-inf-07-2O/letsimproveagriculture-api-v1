import { Body, Controller, Delete, Get, Param, Post, Put, Res  } from '@nestjs/common';
import { learningToolsservice} from './learningTools.service';
import { textbooksEntity } from 'src/learningTools';


@Controller('learningTools')
export class learningToolsController {
    constructor (private learningToolsService:learningToolsservice) {
}

@Get()
async fillAll() {
    const response = await this.learningToolsService.findAll();
    return response; 
}


@Get(":ID")
async findOne (@Param('') ID:number){
    const response = await this.learningToolsService.findOne(ID);
    return response;
}

 @Post()
    async create(@Body() createUserDto: textbooksEntity){
        const response = await this.learningToolsService.create(createUserDto);
        return response;
 }

 @Put(":ID")
 async update (@Param() ID: number, @Body() createUserDto: textbooksEntity) {
    const response = await this.learningToolsService.update(ID,createUserDto)
    return response;
}

@Delete()
async delete (@Body() ID:number) {
    const response = await this.learningToolsService.remove(ID);
    return response;
}


}