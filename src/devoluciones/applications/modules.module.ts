import { Module } from '@nestjs/common';
import { DevolucionesService } from './services/devoluciones.service';

@Module({
  providers: [DevolucionesService]
})
export class ModulesModule {}
