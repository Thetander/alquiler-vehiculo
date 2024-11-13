import { IsString, MaxLength } from 'class-validator';

export class CreateTipoVehiculoDto {
    @IsString()
    @MaxLength(50)
    nombre: string;
}
