import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { DevolucionService } from '../../applications/services/devoluciones.service';
import { CreateDevolucionDto } from '../../applications/dto/create-devoluciones.dto';
import { EditDevolucionDto } from '../../applications/dto/update-devoluciones.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('devoluciones')
@Controller('devoluciones')
export class DevolucionController {
  constructor(private readonly devolucionService: DevolucionService) {}

  @Get()
  async getMany() {
    return await this.devolucionService.getMany();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.devolucionService.getOne(id);
  }

  @Post()
  async createOne(@Body() dto: CreateDevolucionDto) {
    return await this.devolucionService.createOne(dto);
  }

  @Patch(':id')
  async editOne(@Param('id', ParseIntPipe) id: number, @Body() dto: EditDevolucionDto) {
    return await this.devolucionService.editOne(id, dto);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    await this.devolucionService.deleteOne(id);
    return { message: 'Devolución eliminada con éxito' };
  }
}
