import { Test, TestingModule } from '@nestjs/testing';
import { LearningToolsService } from './learning-tools.service';

describe('LearningToolsService', () => {
  let service: LearningToolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearningToolsService],
    }).compile();

    service = module.get<LearningToolsService>(LearningToolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
