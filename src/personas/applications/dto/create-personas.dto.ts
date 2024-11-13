import { IsString, IsEnum, IsDateString, MaxLength, IsNumber, IsOptional } from 'class-validator';

export enum Genero {
    MASCULINO = 'Masculino',
    FEMENINO = 'Femenino',
    OTRO = 'Otro',
}

export class CreatePersonaDto {
    @IsString()
    @MaxLength(10)
    cedula: string;

    @IsString()
    @MaxLength(100)
    nombre: string;

    @IsString()
    @MaxLength(100)
    apellido: string;

    @IsEnum(Genero)
    genero: Genero;

    @IsDateString()
    fechaNacimiento: string;

    @IsString()
    @MaxLength(100)
    telefono: string;

    @IsOptional()
    @IsNumber()
    idDireccion?: number;
}
