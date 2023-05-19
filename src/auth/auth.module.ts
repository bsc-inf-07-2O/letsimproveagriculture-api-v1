import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "src/users/users.module";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { UsersService } from "src/users/users.service";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

@Module({
    imports:[
        UsersModule,
        PassportModule,
        JwtModule.register({
            global:true,
            secret: 'precious',
            signOptions:{expiresIn: '30s'}
        }),
        TypeOrmModule.forFeature([]),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        UsersService
    ],
    exports: [AuthService],
    controllers:[AuthController],
})
export class AuthModule{}