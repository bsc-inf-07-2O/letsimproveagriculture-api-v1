import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { VideoToolsservice} from './VideoTools.service';
import { RolesGuard } from "src/Guards/roles.guards";
import { LoggingInterceptor } from "src/interceptors/logging.interceptors";
import { tutorialsEntity } from "./VideoTools";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('VideoTools')
@Controller('VideoTools')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)

export class VideoToolsController {
    constructor (private VideoToolsService:VideoToolsservice) {
}

@Get()
async fillAll() {
    const response = await this.VideoToolsService.findAll();
    return response; 
}


@Get(":ID")
async findOne (@Param('ID', ParseIntPipe) ID:number){
    const response = await this.VideoToolsService.findOne(ID);
    return response;
}

 @Post()
    async create(@Body() createUserDto: tutorialsEntity){
        const response = await this.VideoToolsService.create(createUserDto);
        return response;
 }

 @Put(":ID")
 async update (@Param('ID', ParseIntPipe) ID: number, @Body() createUserDto: tutorialsEntity) {
    const response = await this.VideoToolsService.update(ID,createUserDto)
    return response;
}

//@Delete()
//async delete (@Body() ID:number) {
    //const response = await this.VideoToolsService.remove(ID);
    //return response;
//}

@Delete(':ID')
  async remove(@Param('ID') ID:number) {
   const user = await this.VideoToolsService.findOne(ID);
  if(user) await this.VideoToolsService.deleteUser(ID)
  else throw new HttpException('not found!', HttpStatus.BAD_REQUEST)
  }


}