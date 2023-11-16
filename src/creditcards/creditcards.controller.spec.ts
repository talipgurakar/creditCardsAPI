import { Test, TestingModule } from '@nestjs/testing';
import { CreditcardsController } from './creditcards.controller';
import { CreditcardsService } from './creditcards.service';

describe('CreditcardsController', () => {
  let controller: CreditcardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditcardsController],
      providers: [CreditcardsService],
    }).compile();

    controller = module.get<CreditcardsController>(CreditcardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
