import { Module } from '@nestjs/common';
import { CreditcardsService } from './creditcards.service';
import { CreditcardsController } from './creditcards.controller';
import { CustomersService } from 'src/customers/customers.service';

@Module({
  controllers: [CreditcardsController],
  providers: [CreditcardsService, CustomersService],

})
export class CreditcardsModule { }
