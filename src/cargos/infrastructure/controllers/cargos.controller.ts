import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CargosService } from '../../applications/services/cargos.service';
import { CreateCargoDto } from '../../applications/dto/create-cargos.dto';
import { UpdateCargoDto } from '../../applications/dto/update-cargos.dto';

@ApiTags('Cargos')
@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {}

  @Post()
  async create(@Body() createCargoDto: CreateCargoDto) {
    return await this.cargosService.create(createCargoDto);
  }

  @Get()
  async findAll() {
    return await this.cargosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.cargosService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCargoDto: UpdateCargoDto,
  ) {
    return await this.cargosService.update(id, updateCargoDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.cargosService.remove(id);
    return { message: 'Cargo eliminado con éxito' };
  }
}
