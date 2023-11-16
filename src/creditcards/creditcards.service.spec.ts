import { Test, TestingModule } from '@nestjs/testing';
import { CreditcardsService } from './creditcards.service';

describe('CreditcardsService', () => {
  let service: CreditcardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditcardsService],
    }).compile();

    service = module.get<CreditcardsService>(CreditcardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
