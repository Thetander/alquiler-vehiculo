import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClienteService } from '../../applications/services/clientes.service';
import { CreateClienteDto } from '../../applications/dto/create-clientes.dto';
import { EditClienteDto } from '../../applications/dto/update-clientes.dto';

@ApiTags('clientes')
@Controller('clientes')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Get()
    async getMany() {
        const data = await this.clienteService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.clienteService.getOne(id);
        return { data };
    }

    @Get('cedula/:cedula')
    async getClienteByCedula(@Param('cedula') cedula: string) {
      const cliente = await this.clienteService.findByCedula(cedula);
      if (!cliente) {
        throw new NotFoundException('Cliente no encontrado');
      }
      return cliente;
    }
  

    @Post()
    async createOne(@Body() dto: CreateClienteDto) {
      const data = await this.clienteService.createOne(dto);
      return { message: 'Cliente created', data };
    }
  


    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditClienteDto) {
        const data = await this.clienteService.editOne(id, dto);
        return { message: 'Cliente updated', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.clienteService.deleteOne(id);
        return { message: 'Cliente deleted', data };
    }
}
