import { Module } from '@nestjs/common';
import { LearningToolsController } from './learning-tools.controller';
import { LearningToolsService } from './learning-tools.service';

@Module({
  controllers: [LearningToolsController],
  providers: [LearningToolsService]
})
export class LearningToolsModule {}
