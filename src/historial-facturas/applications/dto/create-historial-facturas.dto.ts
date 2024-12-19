import { IsNotEmpty, IsEnum, IsNumber, IsDateString } from 'class-validator';

export class CreateHistorialFacturaDto {
  @IsNotEmpty()
  @IsNumber()
  idCliente: number;

  @IsNotEmpty()
  @IsNumber()
  idAlquiler: number;

  @IsNotEmpty()
  @IsDateString()
  fechaEmision: string;

  @IsNotEmpty()
  @IsNumber()
  montoTotal: number;

  @IsNotEmpty()
  @IsEnum(['Efectivo', 'Tarjeta', 'Transferencia'])
  formaPago: string;

  @IsNotEmpty()
  @IsEnum(['Pagado', 'Pendiente'])
  estadoPago: string;
}
