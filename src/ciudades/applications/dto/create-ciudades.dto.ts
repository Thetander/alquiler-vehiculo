import { IsString, MaxLength, IsNumber } from 'class-validator';

export class CreateCiudadDto {
    @IsString()
    @MaxLength(100)
    nombre: string;

    @IsNumber()
    idProvincia: number;
}
