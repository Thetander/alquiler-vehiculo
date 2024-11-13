// create-vehiculo.dto.ts
import { IsString, MaxLength, IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class CreateVehiculoDto {
    @IsString()
    @MaxLength(100)
    matricula: string;

    @IsString()
    @MaxLength(100)
    modelo: string;

    @IsString()
    @MaxLength(100)
    marca: string;

    @IsString()
    @MaxLength(100)
    color: string;

    @IsDateString()
    fechaFabricacion: string;

    @IsString()
    @MaxLength(100)
    numMotor: string;

    @IsString()
    @MaxLength(100)
    numSerie: string;

    @IsBoolean()
    disponible: boolean;

    @IsBoolean()
    mantenimiento: boolean;

    @IsNumber()
    precioAlqDia: number;

    @IsNumber()
    kilometraje: number;

    @IsNumber()
    idTipoVehiculo: number;  

    @IsNumber()
    idEstado: number;
}
