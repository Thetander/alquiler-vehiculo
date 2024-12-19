import { IsNotEmpty, IsEnum, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateReservaAlquilerDto {
  @IsNotEmpty()
  @IsNumber()
  idEmpleadoAlq: number;

  @IsNotEmpty()
  @IsNumber()
  idClienteAlq: number;

  @IsNotEmpty()
  @IsNumber()
  idVehiculoAlq: number;

  @IsNotEmpty()
  @IsDateString()
  fechaInicio: string;

  @IsNotEmpty()
  @IsDateString()
  fechaFin: string;

  @IsNotEmpty()
  @IsEnum(['Reservado', 'En curso', 'Finalizado', 'Cancelado'])
  estadoAlquiler: string;

  @IsOptional()
  @IsNumber()
  costoAdicionalAnomalias?: number;

  @IsNotEmpty()
  @IsNumber()
  montoTotal: number;

  @IsNotEmpty()
  @IsEnum(['Efectivo', 'Tarjeta', 'Transferencia'])
  tipoPago: string;
}
