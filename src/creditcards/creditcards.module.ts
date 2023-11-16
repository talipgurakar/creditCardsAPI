import { Module } from '@nestjs/common';
import { CreditcardsService } from './creditcards.service';
import { CreditcardsController } from './creditcards.controller';

@Module({
  controllers: [CreditcardsController],
  providers: [CreditcardsService],
})
export class CreditcardsModule {}
