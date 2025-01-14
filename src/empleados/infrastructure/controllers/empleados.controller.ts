import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { EmpleadosService } from '../../applications/services/empleados.service';
import { CreateEmpleadoDto } from '../../applications/dto/create-empleados.dto';
import { UpdateEmpleadoDto } from '../../applications/dto/update-empleados.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('empleados')
@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadosService.create(createEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.empleadosService.findOne(id);
  }


  @Get('persona/:idPersona')
  async getEmpleadoByPersona(@Param('idPersona') idPersona: number) {
    const empleado = await this.empleadosService.findByPersonaId(idPersona);
    if (!empleado) {
      throw new NotFoundException('Empleado no encontrado');
    }
    return empleado;
  }


  @Put(':id')
  update(@Param('id') id: number, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadosService.update(id, updateEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.empleadosService.remove(id);
  }
}
