import { Test, TestingModule } from '@nestjs/testing';
import { LearningToolsController } from './learning-tools.controller';

describe('LearningToolsController', () => {
  let controller: LearningToolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearningToolsController],
    }).compile();

    controller = module.get<LearningToolsController>(LearningToolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
