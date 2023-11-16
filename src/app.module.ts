import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { CreditcardsModule } from './creditcards/creditcards.module';


@Module({
  imports: [CustomersModule, CreditcardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
