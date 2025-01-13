import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsuarioService } from 'src/usuarios/applications/services/usuarios.service';
import { CreateUsuarioDto } from 'src/usuarios/applications/dto/create-usuarios.dto';
import { UpdateUsuarioDto } from 'src/usuarios/applications/dto/update-usuarios.dto';
import { JwtAuthGuard } from '../../../auth/infrastructure/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/infrastructure/guards/roles.guard';
import { Roles } from 'auth/roles.decorator';

@ApiTags('usuarios')
@ApiBearerAuth('access-token')
@Controller('usuarios')
export class UsuarioController {

    
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
   // @UseGuards(JwtAuthGuard, RolesGuard) 
    //@Roles('Administrador')
   // getAdminData() {
     // return 'Esta es información solo para administradores';
    //}
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

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
      return this.usuarioService.update(id, updateUsuarioDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.usuarioService.remove(id);
    }
    

}
