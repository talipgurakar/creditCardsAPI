import { InternalServerErrorException, HttpStatus } from "@nestjs/common";

export class DataBaseException extends InternalServerErrorException {
    constructor(message: string) {
        super(message)
    }
}