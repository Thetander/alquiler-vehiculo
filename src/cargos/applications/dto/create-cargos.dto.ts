import { MaxLength, IsString, IsOptional } from 'class-validator';

export class CreateCargoDto {
    @IsString()
    @MaxLength(100)
    nombre: string;

    @IsOptional()
    @IsString()
    descripcion?: string;
}
