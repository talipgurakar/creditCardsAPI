import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCreditcardDto } from './dto/create-creditcard.dto';
import { UpdateCreditcardDto } from './dto/update-creditcard.dto';
import { UpdateLimitDto } from './dto/update-creditcard-limit.dto';
import { CreateTransactionDto } from './dto/create-creditcard-transaction.dto';
import Pool from '../database/dbPool'
import { DataBaseException } from 'src/database/database.exception';

@Injectable()
export class CreditcardsService {
  async create(createCreditcardDto: CreateCreditcardDto) {
    try {
      const createdCard = await Pool.query('INSERT INTO CreditCard (customerID, cardType, cardNumber, cardHolderName, expiryMonth, expiryYear, cvv, cardLimit, cardBalance, accountcutoffdate, lastpaymentdate, mailtelephoneorder, internetorder, abroadusage ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)  RETURNING *', [createCreditcardDto.customerID, createCreditcardDto.cardType, createCreditcardDto.cardNumber, createCreditcardDto.cardHolderName, createCreditcardDto.expiryMonth, createCreditcardDto.expiryYear, createCreditcardDto.cvv, 0, 0, createCreditcardDto.accountCutOffDate, createCreditcardDto.lastPaymentDate, createCreditcardDto.isMailTelephoneOrderEnabled, createCreditcardDto.isInternetOrderEnabled, createCreditcardDto.isAbroadUsageEnabled]);

      return createdCard.rows[0];
    } catch (error) {
      throw new DataBaseException('Credit Card could not be inserted!');
    }
  }

  async findAll() {
    const cards = (await Pool.query('SELECT * FROM CreditCard ORDER BY ID ASC')).rows
    return cards;
  }

  async findOne(id: number) {
    const card = (await Pool.query('SELECT * FROM CreditCard WHERE Id = $1', [id])).rows[0]
    return card;
  }

  async findOneByCardNumber(cardNumber: number) {
    const card = (await Pool.query('SELECT * FROM CreditCard WHERE CardNumber = $1', [cardNumber])).rows[0]
    return card;
  }

  update(id: number, updateCreditcardDto: UpdateCreditcardDto) {
    return `This action updates a #${id} creditcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} creditcard`;
  }

  async updateLimit(updateLimitDto: UpdateLimitDto) {
    try {
      await Pool.query('UPDATE CreditCard SET cardLimit = $2 WHERE Id = $1', [updateLimitDto.cardId, updateLimitDto.cardLimit]);

      return { cardNumber: updateLimitDto.cardId, newCardLimit: updateLimitDto.cardLimit };
    } catch (error) {
      throw new InternalServerErrorException('Credit Card Limit could not be updated!');
    }
  }

  async createTransaction(cardId: number, createTransactionDto: CreateTransactionDto) {
    try {
      const createdTransaction = await Pool.query('INSERT INTO CreditCardTransaction (cardID, amount, transactiondate, merchant, category ) VALUES ($1, $2, $3, $4, $5 )  RETURNING *', [cardId, createTransactionDto.amount, new Date(), createTransactionDto.merchant, createTransactionDto.category]);
      await Pool.query('UPDATE CreditCard SET cardBalance = cardBalance + $1 WHERE id = $2', [createTransactionDto.amount, cardId]);

      return createdTransaction.rows[0];
    } catch (error) {
      throw new DataBaseException('Credit Card purchase could not be made!' + error.message);
    }
  }
}
