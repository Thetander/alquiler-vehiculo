import { Module } from '@nestjs/common';
import { HistorialFacturasController } from '../../infrastructure/controllers/historial-facturas.controller';
import { HistorialFacturaEntity } from 'src/historial-facturas/domain/entities/historial-facturas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialFacturaEntity])],
  controllers: [HistorialFacturasController]
})
export class HistorialFacturasModule {}
