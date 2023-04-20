import { Module } from '@nestjs/common';
import { LearningToolsModule } from './learning-tools/learning-tools.module';

@Module({
  imports: [LearningToolsModule],
  
})
export class AppModule {}
