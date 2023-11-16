import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { CreditcardsService } from './creditcards.service';
import { CustomersService } from '../customers/customers.service';
import { CreateCreditcardDto } from './dto/create-creditcard.dto';
import { UpdateLimitDto } from './dto/update-creditcard-limit.dto';
import { CreateTransactionDto } from './dto/create-creditcard-transaction.dto';

@Controller('creditcards')
export class CreditcardsController {
  constructor(private readonly creditcardsService: CreditcardsService, private readonly customersService: CustomersService) { }

  @Post()
  async create(@Body() createCreditcardDto: CreateCreditcardDto) {
    const existingCard = await this.creditcardsService.findOneByCardNumber(+createCreditcardDto.cardNumber);

    if (existingCard) {
      throw new BadRequestException('Credit Card already exists!');
    }

    const existingCustomer = await this.customersService.findOne(+createCreditcardDto.customerID);
    if (!existingCustomer) {
      throw new BadRequestException('Customer does not exist!');
    }

    return this.creditcardsService.create(createCreditcardDto);
  }

  @Get()
  findAll() {
    return this.creditcardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditcardsService.findOne(+id);
  }

  @Get(':id/createtransaction')
  findTransactionByCardId(@Param('id') id: string) {
    return this.creditcardsService.findTransactionsByCardId(+id);
  }

  @Patch(':id/updatelimit')
  async updateLimit(@Body() updateLimitDto: UpdateLimitDto) {
    const existingCard = await this.creditcardsService.findOne(+updateLimitDto.cardId);
    if (!existingCard) {
      throw new BadRequestException('Credit Card does not exists!');
    }
    this.validateCardLimit(updateLimitDto, existingCard);

    return this.creditcardsService.updateLimit(updateLimitDto);
  }

  @Post('/createtransaction')
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    const existingCard = await this.creditcardsService.findOneByCardNumber(+createTransactionDto.cardNumber);
    if (!existingCard) {
      throw new BadRequestException('Credit Card does not exists!');
    }
    this.validateCardTransaction(createTransactionDto, existingCard);

    return this.creditcardsService.createTransaction(existingCard.id, createTransactionDto);
  }

  private validateCardTransaction(createTransactionDto: CreateTransactionDto, existingCard: any) {
    const today = new Date();
    const expiry = new Date(createTransactionDto.expiryYear + '-' + createTransactionDto.expiryMonth + '-' + '01');
    if (today > expiry) {
      throw new BadRequestException('Credit Card is expired!');
    }
    if (existingCard.cvv !== +createTransactionDto.cvv) {
      throw new BadRequestException('CVV does not match');
    }
    if (+createTransactionDto.amount <= 0) {
      throw new BadRequestException('Invalid amount');
    }
    if (+createTransactionDto.amount > existingCard.cardlimit - existingCard.cardbalance) {
      throw new BadRequestException('Insufficient balance');
    }
  }

  private validateCardLimit(updateLimitDto: UpdateLimitDto, existingCard: any) {
    if (+updateLimitDto.cardLimit < existingCard.cardbalance) {
      throw new BadRequestException('Card limit can not be less than card balance!');
    }
  }
}
