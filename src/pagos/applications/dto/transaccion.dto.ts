import { IsDate, IsDecimal, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CrearTransaccionDto {
  @IsString()
  @IsNotEmpty()
  transactionId: string;

  @IsString()
  @IsNotEmpty()
  intent: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  idPersona: number;

  @IsDate()
  @Type(() => Date) // Necesario para transformar cadenas en instancias de Date
  createTime: Date;

  @IsDate()
  @Type(() => Date) // Necesario para transformar cadenas en instancias de Date
  updateTime: Date;

  @IsEmail()
  @IsNotEmpty()
  payerEmail: string;

  @IsString()
  @IsNotEmpty()
  payerName: string;

  @IsNumber({ maxDecimalPlaces: 2 }) // Valida que sea un número con máximo 2 decimales
  @IsNotEmpty()
  amount: number;
}
