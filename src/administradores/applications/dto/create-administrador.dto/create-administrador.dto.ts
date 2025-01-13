import { IsNotEmpty, IsEnum, IsNumber, IsDateString } from 'class-validator';

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

  @IsNotEmpty()
  @IsDateString()
  fechaRegistro: string;
}
