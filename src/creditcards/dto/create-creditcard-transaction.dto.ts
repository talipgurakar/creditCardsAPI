import { IS_LENGTH, IsNotEmpty, IsNumberString, Length, MaxLength, MinLength } from "class-validator";

export class CreateTransactionDto {

    @IsNotEmpty({ message: 'Card Number is required' })
    @Length(16, 16)
    @IsNumberString()
    cardNumber: string;

    @IsNotEmpty({ message: 'Card Holder Name is required' })
    @Length(3, 30)
    cardHolderName: string;

    @IsNotEmpty({ message: 'Expiry Month is required' })
    @Length(1, 2)
    @IsNumberString()
    expiryMonth: string;

    @IsNotEmpty({ message: 'Expiry Year is required' })
    @Length(4, 4)
    @IsNumberString()
    expiryYear: string;

    @IsNotEmpty({ message: 'CVV is required' })
    @Length(3, 3)
    @IsNumberString()
    cvv: string;

    @IsNotEmpty({ message: 'Amount is required' })
    @IsNumberString()
    amount: string;

    @IsNotEmpty({ message: 'Merchant is required' })
    @Length(3, 100)
    merchant: string;

    @IsNotEmpty({ message: 'Category is required' })
    @IsNumberString()
    category: string;
}
