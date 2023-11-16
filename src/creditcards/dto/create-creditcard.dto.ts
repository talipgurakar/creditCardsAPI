import { IS_LENGTH, IsNotEmpty, IsNumberString, Length, MaxLength, MinLength } from "class-validator";

export class CreateCreditcardDto {
    @IsNotEmpty({ message: 'Customer Id is required' })
    @IsNumberString()
    customerID: string;

    @IsNumberString()
    cardType: string;

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

    @IsNotEmpty({ message: 'Account cut off date is required' })
    accountCutOffDate: Date;

    @IsNotEmpty({ message: 'Last Payment date is required' })
    lastPaymentDate: Date;

    @IsNotEmpty({ message: 'Mail/phone order is required' })
    isMailTelephoneOrderEnabled: boolean;

    @IsNotEmpty({ message: 'Internet order is required' })
    isInternetOrderEnabled: boolean;

    @IsNotEmpty({ message: 'Abroad usage is required' })
    isAbroadUsageEnabled: boolean;
}
