import { IsNotEmpty, IsNumberString, Length } from "class-validator";

export class UpdateLimitDto {
    @IsNotEmpty({ message: 'Card Id is required' })
    @IsNumberString()
    cardId: string;

    @IsNotEmpty({ message: 'Card Limit is required' })
    @IsNumberString()
    cardLimit: string
}
