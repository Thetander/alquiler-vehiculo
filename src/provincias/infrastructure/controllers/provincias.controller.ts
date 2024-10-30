import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProvinciaService } from '../../applications/services/provincias.service';
import { CreateProvinciaDto } from '../../applications/dto/create-provincias.dto';
import { EditProvinciaDto } from '../../applications/dto/update-provincias.dto';

@ApiTags('provincias')
@Controller('provincias')
export class ProvinciaController {
    constructor(private readonly provinciaService: ProvinciaService) {}

    @Get()
    async getMany() {
        const data = await this.provinciaService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.provinciaService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateProvinciaDto) {
        const data = await this.provinciaService.createOne(dto);
        return { message: 'Province created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditProvinciaDto) {
        const data = await this.provinciaService.editOne(id, dto);
        return { message: 'Province edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.provinciaService.deleteOne(id);
        return { message: 'Province deleted', data };
    }
}
