import { Module } from '@nestjs/common';
import { VehiculosService } from './services/vehiculos.service';

@Module({
  providers: [VehiculosService]
})
export class ModulesModule {}
