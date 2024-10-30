import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DireccionService } from '../../applications/services/direcciones.service';
import { CreateDireccionDto } from '../../applications/dto/create-direcciones.dto';
import { EditDireccionDto } from '../../applications/dto/update-direcciones.dto';

@ApiTags('direcciones')
@Controller('direcciones')
export class DireccionController {
    constructor(private readonly direccionService: DireccionService) {}

    @Get()
    async getMany() {
        const data = await this.direccionService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.direccionService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateDireccionDto) {
        const data = await this.direccionService.createOne(dto);
        return { message: 'Address created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditDireccionDto) {
        const data = await this.direccionService.editOne(id, dto);
        return { message: 'Address edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.direccionService.deleteOne(id);
        return { message: 'Address deleted', data };
    }
}
