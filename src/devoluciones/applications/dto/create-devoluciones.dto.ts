import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateDevolucionDto {
  @IsNotEmpty()
  @IsBoolean()
  anomalia: boolean;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNotEmpty()
  @IsDateString()
  fechaDevolucion: Date;

  @IsNotEmpty()
  reservaAlquiler: number; // ID de la reserva de alquiler asociada
}
