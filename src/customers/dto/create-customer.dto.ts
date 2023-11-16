import { IS_LENGTH, IsNotEmpty, IsNumberString, Length, MaxLength, MinLength } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty({ message: 'Government Id is required' })
    @Length(11, 11)
    @IsNumberString()
    GovernmentID: string;
    cardType: string;

    @IsNotEmpty({ message: 'Name is required' })
    @MaxLength(100)
    Name: string;

    @IsNotEmpty({ message: 'Surname is required' })
    @MaxLength(100)
    Surname: string;

    @IsNotEmpty({ message: 'Is Foreigner is required' })
    Foreigner: boolean;

    @IsNotEmpty({ message: 'BirthDate is required' })
    BirthDate: Date;
}
