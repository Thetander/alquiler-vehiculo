import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateModeloDto, UpdateModeloDto } from 'modelo/applications/dto';
import { ModeloService } from 'modelo/applications/service/modelo.service';

@ApiTags('modelo')
@Controller('modelo')
export class ModeloController {
    constructor(private readonly modeloService: ModeloService) {}

    @Get()
    async getMany() {
        const data = await this.modeloService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.modeloService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateModeloDto) {
        const data = await this.modeloService.createOne(dto);
        return { message: 'Modelo created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: UpdateModeloDto) {
        const data = await this.modeloService.editOne(dto, id);
        return { message: 'Modelo edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.modeloService.deleteOne(id);
        return { message: 'Modelo deleted', data };
    }

    @Get('marca/:idMarca')
    async getModelosByMarca(@Param('idMarca') idMarca: number) {
        const data = await this.modeloService.getModelosByMarca(idMarca);
        return { data };
    }
}
