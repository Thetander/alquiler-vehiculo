import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, BadRequestException } from '@nestjs/common';
import { ReservaAlquilerService } from '../../applications/services/reserva-alquiler.service';
import { CreateReservaAlquilerDto } from '../../applications/dto/create-reserva-alquiler.dto';
import { EditReservaAlquilerDto } from '../../applications/dto/update-reserva-alquiler.dto';

import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { ReservaAlquilerEntity } from 'reserva-alquiler/domain/entities/reserva-alquiler.entity';
import { UpdateCostoAdicionalDto } from 'reserva-alquiler/applications/dto/update-costo-adicional.dto';
@ApiTags('reserva-alquiler')
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

  @Put(':id/costo-adicional')
  async actualizarCostoAdicional(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCostoAdicionalDto, // Usa el DTO aquí
  ): Promise<ReservaAlquilerEntity> {
    const { costoAdicional } = dto;
    return this.reservaAlquilerService.actualizarCostoAdicional(id, costoAdicional);
  }
  
  
}
