import { hash } from 'bcryptjs';
import { IsString, IsEnum, IsNumber, MaxLength } from 'class-validator';
import { BeforeInsert, BeforeUpdate } from 'typeorm';

export enum Rol {
    ADMINISTRADOR = 'Administrador',
    EMPLEADO = 'Empleado',
    CLIENTE = 'Cliente',
}

export enum Estado {
    ACTIVO = 'Activo',
    INACTIVO = 'Inactivo',
}

export class CreateUsuarioDto {
    @IsString()
    password: string;

    @IsString()
    @MaxLength(100)
    email:string;

    @IsEnum(Rol)
    rol: Rol;

    @IsEnum(Estado)
    estado: Estado;

    @IsNumber()
    idPersona: number;
  
}
