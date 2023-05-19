import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService{
    constructor (private readonly userService: UsersService, private readonly jwtService: JwtService){}

    async validateUser(email: string, password: string): Promise<any>{
        const user = await this.userService.findUser({email, password})
        try{
            const isMatch = await bcrypt.compare(password,user.password);
            if (user && isMatch){
                return user;
            }
        }catch(error){
            return null;

        }
            if (!user) return null;
            return user;
        }
        async login(user: any){
            const payload = {username: user.username, sub: user._id, roles:user.roles};
            await this.userService.UpdateUser(user.id, user)
            return{
                 isLogged: true,
                access_token: this.jwtService.sign(payload),
            };
        }
        async logout(user: any){
        const payload = {username: user.username, sub: user._id, roles:user.roles};
        await this.userService.UpdateUser(user.id, user)
        return{
             isLogged: false,
            access_token: this.jwtService.sign(payload),
        };
      }
}
