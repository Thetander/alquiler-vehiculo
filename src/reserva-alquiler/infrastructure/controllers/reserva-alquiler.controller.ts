import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ReservaAlquilerService } from '../../applications/services/reserva-alquiler.service';
import { CreateReservaAlquilerDto } from '../../applications/dto/create-reserva-alquiler.dto';
import { EditReservaAlquilerDto } from '../../applications/dto/update-reserva-alquiler.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('reserva-alquiler')
@Controller('reserva-alquiler')
@Controller('reserva-alquiler')

export class ReservaAlquilerController {
  constructor(private readonly reservaAlquilerService: ReservaAlquilerService) {}

  @Get()
  async getAll() {
    return await this.reservaAlquilerService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.reservaAlquilerService.getOne(id);
  }

  @Post()
  async create(@Body() dto: CreateReservaAlquilerDto) {
    return await this.reservaAlquilerService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditReservaAlquilerDto,
  ) {
    return await this.reservaAlquilerService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.reservaAlquilerService.delete(id);
  }
}
