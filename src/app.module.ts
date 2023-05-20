import { BadRequestException, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { textbooksEntity } from './learningTools.js';
import { learningToolsModel } from './learningTools.module.js'; 
import { ApiTokenCheckMiddleware } from './middleware/api-token-check.middleware.js';
import { examsPapersModel } from './examsPapers/examsPapers.module.js';
import { VideoToolsModel } from './Video_tools/VideoTools.module.js';
import { tutorialsEntity } from './Video_tools/VideoTools.js';
import { Papers } from './examsPapers/examsPapers.js';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity.js';
import entities from './entity/index.js';



@Module({
  imports: [VideoToolsModel,examsPapersModel,
    TypeOrmModule.forRoot({
    type: 'mysql',
    // autoLoadEntities: true,
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'letsimproveagriculture',
    entities: entities,
    synchronize: true
  }), learningToolsModel, 
    UsersModule,
   UsersModule],
  controllers: [AppController],
  providers: [AppService],
})   

export class AppModule{}