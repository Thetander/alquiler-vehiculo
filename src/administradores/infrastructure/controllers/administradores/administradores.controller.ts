import { Controller, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AdministradoresService } from '../../../applications/services/administradores/administradores.service';
import { CreateAdministradorDto } from '../../../applications/dto/create-administrador.dto/create-administrador.dto';
import { UpdateAdministradorDto } from '../../../applications/dto/update-administrador.dto/update-administrador.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('administradores')
@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly administradoresService: AdministradoresService) {}

  @Post()
  async create(@Body() dto: CreateAdministradorDto) {
    return await this.administradoresService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateAdministradorDto) {
    return await this.administradoresService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.administradoresService.delete(id);
  }
}
