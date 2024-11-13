import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsuarioService } from 'src/usuarios/applications/services/usuarios.service';
import { CreateUsuarioDto } from 'src/usuarios/applications/dto/create-usuarios.dto';
import { EditUsuarioDto } from 'src/usuarios/applications/dto/update-usuarios.dto';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    async getMany() {
        const data = await this.usuarioService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.usuarioService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateUsuarioDto) {
        const data = await this.usuarioService.createOne(dto);
        return { message: 'Usuario created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditUsuarioDto) {
        const data = await this.usuarioService.editOne(id, dto);
        return { message: 'Usuario updated', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.usuarioService.deleteOne(id);
        return { message: 'Usuario deleted', data };
    }
}
