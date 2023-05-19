import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  login(@Body() userDetailsDto:{email:string,password:string}):Promise<any>{
    return this.usersService.findUser(userDetailsDto)
  }
  @Post('register')
  async createUser(@Body() createUserDto:CreateUserDto):Promise<User>{
    return await this.usersService.createUser(createUserDto)
  }
  @Post()
    async create(@Body() createUserDto: User){
        const response = await this.usersService.create(createUserDto);
        return response;
 }
 @Get()
 findAll() {
  return this.usersService.findAll();
 }

  @Get(':id')
  show(@Param('id') id: number) {
    return this.usersService.showById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id:number) {
   return this.usersService.remove(+id);
  }
}
