import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VehiculoService } from 'src/vehiculos/applications/services/vehiculos.service';
import { CreateVehiculoDto } from 'src/vehiculos/applications/dto/create-vehiculos.dto';
import { EditVehiculoDto } from 'src/vehiculos/applications/dto/update-vehiculos.dto';

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
    async createOne(@Body() dto: CreateVehiculoDto) {
        const data = await this.vehiculoService.createOne(dto);
        return { message: 'Vehiculo created', data };
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
