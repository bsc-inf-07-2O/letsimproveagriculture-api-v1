import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { RolesGuard } from "src/Guards/roles.guards";
import { LoggingInterceptor } from "src/interceptors/logging.interceptors";
import { examsPapersservice } from "./examsPapers.service";
import { Papers } from "./examsPapers";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('examsPapers')
@Controller('examsPapers')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)

export class examsPapersController {
    constructor (private examsPapersService:examsPapersservice) {
}

@Get()
async fillAll() {
    const response = await this.examsPapersService.findAll();
    return response; 
}


@Get(":ID")
async findOne (@Param('ID', ParseIntPipe) ID:number){
    const response = await this.examsPapersService.findOne(ID);
    return response;
}

 @Post()
    async create(@Body() createUserDto: Papers){
        const response = await this.examsPapersService.create(createUserDto);
        return response;
 }

 @Put(":ID")
 async update (@Param('ID', ParseIntPipe) ID: number, @Body() createUserDto: Papers) {
    const response = await this.examsPapersService.update(ID,createUserDto)
    return response;
}

@Delete(':ID')
  async remove(@Param('ID') ID:number) {
   const user = await this.examsPapersService.findOne(ID);
  if(user) await this.examsPapersService.deleteUser(ID)
  else throw new HttpException('not found!', HttpStatus.BAD_REQUEST)
 }


}