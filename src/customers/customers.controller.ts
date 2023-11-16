import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const existingCustomer = await this.customersService.findOneByGovernmentId(+createCustomerDto.GovernmentID);
    if (existingCustomer) {
      throw new BadRequestException('Customer already exists!');
    }

    return this.customersService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    const allCustomers = this.customersService.findAll();
    return allCustomers;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
