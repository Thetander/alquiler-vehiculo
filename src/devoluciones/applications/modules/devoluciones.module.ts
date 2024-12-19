import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevolucionEntity } from '../../domain/entities/devoluciones.entity';
import { DevolucionService } from '../services/devoluciones.service';
import { DevolucionController } from '../../infrastructure/controllers/devoluciones.controller';
import { VehiculosModule } from 'vehiculos/applications/modules/vehiculos.module';

@Module({
  imports: [TypeOrmModule.forFeature([DevolucionEntity]), VehiculosModule],
  controllers: [DevolucionController],
  providers: [DevolucionService],
  exports: [DevolucionService],
})
export class DevolucionModule {}
