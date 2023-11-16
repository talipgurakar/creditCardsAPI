import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

import Pool from '../database/dbPool'
import { DataBaseException } from 'src/database/database.exception';

@Injectable()
export class CustomersService {
  async create(createCustomerDto: CreateCustomerDto) {

    try {
      const createdCustomer = await Pool.query('INSERT INTO Customer (GovernmentID, Name, Surname, Foreigner, BirthDate) VALUES ($1, $2, $3, $4, $5)  RETURNING *', [createCustomerDto.GovernmentID, createCustomerDto.Name, createCustomerDto.Surname, createCustomerDto.Foreigner, createCustomerDto.BirthDate]);

      return createdCustomer.rows[0];
    } catch (error) {
      //TODO Log all exceptions
      throw new DataBaseException('Customer could not be created!');
    }
  }

  async findAll() {
    try {
      const customers = (await Pool.query('SELECT * FROM Customer ORDER BY ID ASC')).rows;
      return customers;
    } catch (error) {
      throw new DataBaseException('Customers could not be fetched from database!');
    }
  }

  async findOne(id: number) {
    try {
      const customer = (await Pool.query('SELECT * FROM Customer WHERE ID = $1', [id])).rows[0];
      return customer;
    } catch (error) {
      throw new DataBaseException('Customer could not be fetched from database!');
    }
  }

  async findOneByGovernmentId(governmentId: number) {
    try {
      const customer = (await Pool.query('SELECT * FROM Customer WHERE GovernmentId = $1', [governmentId])).rows[0];
      return customer;
    } catch (error) {
      throw new DataBaseException('Customer could not be fetched from database!');
    }
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
