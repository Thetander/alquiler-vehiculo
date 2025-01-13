import { IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';

export class CreateAdministradorDto {
  @IsNotEmpty()
  @IsNumber()
  idPersona: number;

  @IsNotEmpty()
  @IsNumber()
  idCargo: number;

  @IsNotEmpty()
  @IsEnum(['Activo', 'Inactivo'])
  estado: string;
}
