import { IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreateEmpleadoDto {
  @IsNotEmpty()
  @IsNumber()
  idPersona: number;

  @IsNotEmpty()
  @IsNumber()
  idCargo: number;

  @IsNotEmpty()
  @IsDateString()
  fechaContratacion: string;
}
