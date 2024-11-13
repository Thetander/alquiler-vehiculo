import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolService } from 'src/roles/applications/services/roles.service';
import { CreateRolDto } from 'src/roles/applications/dto/create-roles.dto';
import { EditRolDto } from 'src/roles/applications/dto/update-roles.dto';

@ApiTags('roles')
@Controller('roles')
export class RolController {
    constructor(private readonly rolService: RolService) {}

    @Get()
    async getMany() {
        const data = await this.rolService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.rolService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateRolDto) {
        const data = await this.rolService.createOne(dto);
        return { message: 'Rol created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditRolDto) {
        const data = await this.rolService.editOne(id, dto);
        return { message: 'Rol updated', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.rolService.deleteOne(id);
        return { message: 'Rol deleted', data };
    }
}
