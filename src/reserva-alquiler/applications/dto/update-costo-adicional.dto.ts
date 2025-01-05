import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateCostoAdicionalDto {
  @IsNotEmpty()
  @IsNumber()
  costoAdicional: number;
}
