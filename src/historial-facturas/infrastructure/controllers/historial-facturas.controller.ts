import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { HistorialFacturaService } from '../../applications/services/historial-facturas.service';
import { CreateHistorialFacturaDto } from '../../applications/dto/create-historial-facturas.dto';
import { EditHistorialFacturaDto } from '../../applications/dto/update-historial-facturas.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('historial-factura')

@Controller('historial-factura')
export class HistorialFacturaController {
  constructor(private readonly historialFacturaService: HistorialFacturaService) {}

  @Get()
  async getAll() {
    return await this.historialFacturaService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.historialFacturaService.getOne(id);
  }

  @Post()
  async create(@Body() dto: CreateHistorialFacturaDto) {
    return await this.historialFacturaService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditHistorialFacturaDto,
  ) {
    return await this.historialFacturaService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.historialFacturaService.delete(id);
  }
}
