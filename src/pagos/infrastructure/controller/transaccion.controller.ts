import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransaccionService } from '../../applications/service/transaccion.service';
import { Transaccion } from '../../domain/entities/transaccion.entity';
import { CrearTransaccionDto } from '../../applications/dto/transaccion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('transacciones')
@Controller('transacciones')
export class TransaccionController {
  constructor(private readonly transaccionService: TransaccionService) {}

  @Post('guardar')
  async guardarTransaccion(@Body() transaccionData: CrearTransaccionDto) {
    const transaccion = await this.transaccionService.crearTransaccion(transaccionData);
    return {
      message: 'Transacción guardada exitosamente',
      transaccion,
    };
  }

  @Get()
  async obtenerTransacciones(): Promise<Transaccion[]> {
    return await this.transaccionService.obtenerTodasTransacciones();
  }

  @Get(':transactionId')
  async obtenerTransaccionPorId(@Param('transactionId') transactionId: string): Promise<Transaccion> {
    return await this.transaccionService.obtenerTransaccionPorId(transactionId);
  }

  @Get('persona/:idPersona')
  async obtenerTransaccionesPorPersona(@Param('idPersona') idPersona: number): Promise<Transaccion[]> {
    return await this.transaccionService.obtenerTransaccionesPorPersona(idPersona);
  }
}
