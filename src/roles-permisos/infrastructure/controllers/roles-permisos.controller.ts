import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesPermisosService } from 'src/roles-permisos/applications/services/roles-permisos.service';
import { CreateRolesPermisosDto } from 'src/roles-permisos/applications/dto/create-roles-permisos.dto';
import { EditRolesPermisosDto } from 'src/roles-permisos/applications/dto/update-roles-permisos.dto';

@ApiTags('roles-permisos')
@Controller('roles-permisos')
export class RolesPermisosController {
    constructor(private readonly rolesPermisosService: RolesPermisosService) {}

    @Get()
    async getMany() {
        const data = await this.rolesPermisosService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.rolesPermisosService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateRolesPermisosDto) {
        const data = await this.rolesPermisosService.createOne(dto);
        return { message: 'Role-Permission created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditRolesPermisosDto) {
        const data = await this.rolesPermisosService.editOne(id, dto);
        return { message: 'Role-Permission edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.rolesPermisosService.deleteOne(id);
        return { message: 'Role-Permission deleted', data };
    }
}
