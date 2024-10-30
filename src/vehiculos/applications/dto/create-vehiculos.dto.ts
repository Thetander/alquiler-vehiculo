import { IsString, MaxLength, IsBoolean, IsDateString, IsNumber, IsEnum } from 'class-validator';

export enum TipoVehiculo {
    SUV = 'SUV',
    SEDAN = 'Sedan',
    CAMIONETA = 'Camioneta',
}

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

    @IsEnum(TipoVehiculo)
    tipoVehiculo: TipoVehiculo;

    @IsNumber()
    idEstado: number;
}
