import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PersonaService } from '../../applications/services/personas.service';
import { CreatePersonaDto } from '../../applications/dto/create-personas.dto';
import { EditPersonaDto } from '../../applications/dto/update-personas.dto';

@ApiTags('personas')
@Controller('personas')
export class PersonaController {
    constructor(private readonly personaService: PersonaService) {}

    @Get()
    async getMany() {
        const data = await this.personaService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.personaService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreatePersonaDto) {
        const data = await this.personaService.createOne(dto);
        return { message: 'Persona created', data: data }; 
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditPersonaDto) {
        const data = await this.personaService.editOne(id, dto);
        return { message: 'Persona updated', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.personaService.deleteOne(id);
        return { message: 'Persona deleted', data };
    }
}
