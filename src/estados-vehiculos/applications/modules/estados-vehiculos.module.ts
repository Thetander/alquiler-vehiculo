import { Module } from '@nestjs/common';
import { EstadosVehiculosController } from '../../infrastructure/controllers/estados-vehiculos.controller';
import { EstadoVehiculoEntity } from 'src/estados-vehiculos/domain/entities/estados-vehiculos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoVehiculoEntity])],
  controllers: [EstadosVehiculosController]
})
export class EstadosVehiculosModule {}
