import { Module } from '@nestjs/common';
import { DireccionesService } from './services/direcciones.service';

@Module({
  providers: [DireccionesService]
})
export class ModulesModule {}
