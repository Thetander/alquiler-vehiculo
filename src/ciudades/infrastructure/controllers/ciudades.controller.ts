import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CiudadService } from '../../applications/services/ciudades.service';
import { CreateCiudadDto } from '../../applications/dto/create-ciudades.dto';
import { EditCiudadDto } from '../../applications/dto/update-ciudades.dto';

@ApiTags('ciudades')
@Controller('ciudades')
export class CiudadController {
    constructor(private readonly ciudadService: CiudadService) {}

    @Get()
    async getMany() {
        const data = await this.ciudadService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.ciudadService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateCiudadDto) {
        const data = await this.ciudadService.createOne(dto);
        return { message: 'Ciudad created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditCiudadDto) {
        const data = await this.ciudadService.editOne(id, dto);
        return { message: 'Ciudad updated', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.ciudadService.deleteOne(id);
        return { message: 'Ciudad deleted', data };
    }
}
