import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCargoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;
}
