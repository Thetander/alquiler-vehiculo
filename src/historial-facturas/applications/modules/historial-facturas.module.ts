import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialFacturaService } from '../services/historial-facturas.service';
import { HistorialFacturaController } from '../../infrastructure/controllers/historial-facturas.controller';
import { HistorialFacturaEntity } from '../../domain/entities/historial-facturas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialFacturaEntity])],
  controllers: [HistorialFacturaController],
  providers: [HistorialFacturaService],
  exports:[HistorialFacturaService]
})
export class HistorialFacturasModule {}
