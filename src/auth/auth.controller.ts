import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { JwtAuthGuard } from "./guards/jwt.guard";
import { RolesGuard } from "src/Guards/roles.guards";
import { Roles } from "./roles.decorators";
import { Body, Controller, Get, Post,Request,UseGuards } from "@nestjs/common";
import { Role } from "./enums/role.enum";

@Controller('users/auth')
export class AuthController{
    constructor(private readonly authService: AuthService, private readonly userService: UsersService){

    }
    @Post('/register')
    async register (@Body() CreateUserDto: CreateUserDto){
        const users = await this.userService.addUser('CreateUserDto)')
        return users;
    }
    @Post('/login')
    async login (@Request() req:any){
        console.log(req.body)
        return this.authService.login(req.body);

    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Users)
    @Get('/users')
    getprofile(@Request() req:any){
        return req.users;
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get('/admin')
    getDahsboard(@Request() req:any){
        return req.user;
    }
}
