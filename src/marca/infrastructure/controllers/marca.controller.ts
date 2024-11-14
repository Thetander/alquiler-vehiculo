import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMarcaDto, UpdateMarcaDto } from 'marca/applications/dto';
import { MarcaService } from 'marca/applications/services/marca.service';

@ApiTags('marca')
@Controller('marca')
export class MarcaController {
    constructor(private readonly marcaService: MarcaService) {}

    @Get()
    async getMany() {
        const data = await this.marcaService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.marcaService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateMarcaDto) {
        const data = await this.marcaService.createOne(dto);
        return { message: 'Marca created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: UpdateMarcaDto) {
        const data = await this.marcaService.editOne(dto, id);
        return { message: 'Marca edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.marcaService.deleteOne(id);
        return { message: 'Marca deleted', data };
    }
}
