import { Module } from '@nestjs/common';
import {learningToolsservice} from './learningTools.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { textbooksEntity } from 'src/learningTools';
import { learningToolsController } from './learningTools.controller';

@Module({
  imports: [TypeOrmModule.forFeature([textbooksEntity])],
  controllers: [learningToolsController],
  providers: [learningToolsservice],
})
export class learningToolsModel {}
