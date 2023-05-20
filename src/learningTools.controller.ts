import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Res, UseGuards, UseInterceptors  } from '@nestjs/common';
import { learningToolsservice} from './learningTools.service';
import { textbooksEntity } from 'src/learningTools';
import { RolesGuard } from './Guards/roles.guards';
import { LoggingInterceptor } from './interceptors/logging.interceptors';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('learningTools')
@Controller('learningTools')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)

export class learningToolsController {
    constructor (private learningToolsService:learningToolsservice) {
}

@Get()
async fillAll() {
    const response = await this.learningToolsService.findAll();
    return response; 
}


@Get(":ID")
async findOne (@Param('ID', ParseIntPipe) ID:number){
    const response = await this.learningToolsService.findOne(ID);
    return response;
}

 @Post()
    async create(@Body() createUserDto: textbooksEntity){
        const response = await this.learningToolsService.create(createUserDto);
        return response;
 }

 @Put(":ID")
 async update (@Param('ID', ParseIntPipe) ID: number, @Body() createUserDto: textbooksEntity) {
    const response = await this.learningToolsService.update(ID,createUserDto)
    return response;
}

//@Delete()
//async delete (@Body() ID:number) {
  //  const response = await this.learningToolsService.remove(ID);
    //return response;
//}

@Delete(':ID')
  async remove(@Param('ID') ID:number) {
   const user = await this.learningToolsService.findOne(ID);
  if(user) await this.learningToolsService.deleteUser(ID)
  else throw new HttpException('not found!', HttpStatus.BAD_REQUEST)
  }

}