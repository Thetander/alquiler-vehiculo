import { Module } from '@nestjs/common';
import { VehiculosController } from '../../infrastructure/controllers/vehiculos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoEntity } from 'src/vehiculos/domain/entities/vehiculos.entity/vehiculos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehiculoEntity])],
  controllers: [VehiculosController]
})
export class VehiculosModule {}
