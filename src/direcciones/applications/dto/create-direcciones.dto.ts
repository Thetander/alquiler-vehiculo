import { MaxLength, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateDireccionDto {
    @IsString()
    @MaxLength(100)
    barrio: string;

    @IsString()
    @MaxLength(100)
    callePrincipal: string;

    @IsString()
    @MaxLength(100)
    calleSecundaria: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    referencia?: string;

    @IsNumber()
    idCiudad: number;
}
