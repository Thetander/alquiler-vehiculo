import { Module } from '@nestjs/common';
import { ReservaAlquilerService } from './services/reserva-alquiler.service';

@Module({
  providers: [ReservaAlquilerService]
})
export class ModulesModule {}
