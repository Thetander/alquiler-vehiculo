import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TipoVehiculoService } from '../../applications/services/tipo-vehiculo.service';
import { CreateTipoVehiculoDto } from '../../applications/dto/create-tipo-vehiculo.dto';
import { EditTipoVehiculoDto } from '../../applications/dto/update-tipo-vehiculo.dto';

@ApiTags('tipos-vehiculos')
@Controller('tipos-vehiculos')
export class TipoVehiculoController {
    constructor(private readonly tipoVehiculoService: TipoVehiculoService) {}

    @Get()
    async getMany() {
        const data = await this.tipoVehiculoService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.tipoVehiculoService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateTipoVehiculoDto) {
        const data = await this.tipoVehiculoService.createOne(dto);
        return { message: 'Tipo de Vehiculo created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditTipoVehiculoDto) {
        const data = await this.tipoVehiculoService.editOne(id, dto);
        return { message: 'Tipo de Vehiculo updated', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.tipoVehiculoService.deleteOne(id);
        return { message: 'Tipo de Vehiculo deleted', data };
    }
}
