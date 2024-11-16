import { IsString, MaxLength, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateVehiculoDto {
    @IsString()
    @MaxLength(100)
    matricula: string;

    @IsNumber()
    idModelo: number;

    @IsNumber()
    idMarca: number;

    @IsNumber()
    idColor: number;

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

    @IsNumber()
    capacidad: number;

    @IsNumber()
    nroPuertas: number;

    @IsString()
    @MaxLength(20)
    transmision: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    imagen?: string;
}
