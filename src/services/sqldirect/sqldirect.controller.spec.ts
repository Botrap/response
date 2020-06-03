import { Test, TestingModule } from '@nestjs/testing';
import { SqldirectController } from './sqldirect.controller';

describe('Sqldirect Controller', () => {
  let controller: SqldirectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SqldirectController],
    }).compile();

    controller = module.get<SqldirectController>(SqldirectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
