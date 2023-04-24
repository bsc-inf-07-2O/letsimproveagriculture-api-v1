import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { textbooksEntity } from './learningTools.js';
import { learningToolsModel } from './learningTools.module.js'; 

@Module({
  imports: [textbooksEntity,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'learningTools',
    entities: [textbooksEntity],
    synchronize: false,
  }), learningToolsModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
