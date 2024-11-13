import { Module } from '@nestjs/common';
import { TipoVehiculoService } from '../services/tipo-vehiculo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([])],
  providers: [TipoVehiculoService]
})
export class InfrastructureModule {}
