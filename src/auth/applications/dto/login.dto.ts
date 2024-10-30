import { IsNotEmpty, IsNumber } from 'class-validator';

export class LoginDto {
  @IsNumber()
  idPersona: number;

  @IsNotEmpty()
  password: string;
}
