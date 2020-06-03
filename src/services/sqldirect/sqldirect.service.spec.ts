import { Test, TestingModule } from '@nestjs/testing';
import { SqldirectService } from './sqldirect.service';

describe('SqldirectService', () => {
  let service: SqldirectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SqldirectService],
    }).compile();

    service = module.get<SqldirectService>(SqldirectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
