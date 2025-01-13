import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { AdministradoresService } from 'src/administradores/applications/services/administradores/administradores.service';
import { CreateAdministradorDto } from 'src/administradores/applications/dto/create-administrador.dto/create-administrador.dto';
import { UpdateAdministradorDto } from 'src/administradores/applications/dto/update-administrador.dto/update-administrador.dto';

@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly administradoresService: AdministradoresService) {}

  @Post()
  async create(@Body() createAdministradorDto: CreateAdministradorDto) {
    return this.administradoresService.create(createAdministradorDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAdministradorDto: UpdateAdministradorDto,
  ) {
    return this.administradoresService.update(id, updateAdministradorDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.administradoresService.remove(id);
  }
}
