import { Module } from '@nestjs/common';
import { EstadosVehiculosService } from './services/estados-vehiculos.service';

@Module({
  providers: [EstadosVehiculosService]
})
export class ModulesModule {}
