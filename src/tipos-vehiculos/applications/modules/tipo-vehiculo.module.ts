import { Module } from '@nestjs/common';
import { TipoVehiculoService } from '../services/tipo-vehiculo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoVehiculoEntity } from 'tipos-vehiculos/domain/entities/tipos-vehiculos.entity';
import { TipoVehiculoController } from 'tipos-vehiculos/infrastructure/controllers/tipo-vehiculo.controller';

@Module({
  imports:[TypeOrmModule.forFeature([TipoVehiculoEntity])],
  controllers:[TipoVehiculoController],
  exports:[TipoVehiculoService],
  providers: [TipoVehiculoService]
})
export class InfrastructureModule {}
