import { Module } from '@nestjs/common';
import { VehiculoController } from '../../infrastructure/controllers/vehiculos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoEntity } from 'src/vehiculos/domain/entities/vehiculos.entity/vehiculos.entity';
import { VehiculoService } from '../services/vehiculos.service';

@Module({
  imports: [TypeOrmModule.forFeature([VehiculoEntity])],
  controllers: [VehiculoController],
  exports:[VehiculoService],
  providers:[VehiculoService]
})
export class VehiculosModule {}
