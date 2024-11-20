import { IsString, IsEnum, IsNumber, MaxLength } from 'class-validator';

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
  email: string;

  @IsEnum(Rol)
  rol: Rol;

  @IsEnum(Estado)
  estado: Estado;

  @IsNumber()
  idPersona: number;
}
