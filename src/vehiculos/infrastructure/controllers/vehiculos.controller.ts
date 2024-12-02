import { Controller, Get, Post, Put, Delete, Param, Body, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VehiculoService } from 'src/vehiculos/applications/services/vehiculos.service';
import { CreateVehiculoDto } from 'src/vehiculos/applications/dto/create-vehiculos.dto';
import { EditVehiculoDto } from 'src/vehiculos/applications/dto/update-vehiculos.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestException } from '@nestjs/common';

@ApiTags('vehiculos')
@Controller('vehiculos')
export class VehiculoController {
    constructor(private readonly vehiculoService: VehiculoService) {}

    @Get()
    async getMany(@Query('marca') marca?: string, @Query('modelo') modelo?: string, @Query('color') color?: string, @Query('tipoVehiculo') tipoVehiculo?: string) {
        const filters = { marca, modelo, color, tipoVehiculo };
        const data = await this.vehiculoService.getMany(filters);
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.vehiculoService.getOne(id);
        return { data };
    }

    @Post()
@UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
        destination: './assets',
        filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('');
            cb(null, `${randomName}${extname(file.originalname)}`);
        }
    }),
}))
async createOne(
    @UploadedFile() file: Express.Multer.File, 
    @Body('vehiculo') vehiculoJson: string
) {
    try {
        // Parsear el JSON y transformarlo en una instancia del DTO
        const rawDto = JSON.parse(vehiculoJson);
        const dto = plainToInstance(CreateVehiculoDto, rawDto);

        // Validar los datos
        const errors = await validate(dto);
        if (errors.length > 0) {
            console.error('Errores de validación:', errors);
            throw new BadRequestException(errors);
        }

        // Agregar el nombre del archivo al DTO, si se subió un archivo
        if (file) {
            dto.imagen = `${file.filename}`;
        }

        // Llamar al servicio para crear el vehículo
        const data = await this.vehiculoService.createOne(dto);
        return { message: 'Vehículo creado con éxito', data };
    } catch (error) {
        console.error('Error al crear vehículo:', error);
        throw new BadRequestException('Error al procesar la solicitud');
    }
}

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditVehiculoDto) {
        const data = await this.vehiculoService.editOne(id, dto);
        return { message: 'Vehiculo updated', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.vehiculoService.deleteOne(id);
        return { message: 'Vehiculo deleted', data };
    }
}
