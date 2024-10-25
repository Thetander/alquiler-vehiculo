import { Module } from '@nestjs/common';
import { CiudadesService } from './services/ciudades.service';

@Module({
  providers: [CiudadesService]
})
export class ModulesModule {}
