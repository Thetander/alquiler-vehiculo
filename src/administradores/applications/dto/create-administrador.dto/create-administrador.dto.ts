import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CreateAdministradorDto {
  @IsNotEmpty()
  @IsString()
  cargo: string;

  @IsNotEmpty()
  @IsEnum(['Activo', 'Inactivo'])
  estado: string;

  @IsNotEmpty()
  idPersona: number;
}
