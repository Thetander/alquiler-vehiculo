import { IsNumber } from 'class-validator';

export class CreateClienteDto {
    @IsNumber()
    idPersona: number;
}
