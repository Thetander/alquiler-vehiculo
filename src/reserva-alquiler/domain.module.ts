import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { ReservaAlquilerController } from './infrastructure/controllers/reserva-alquiler.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [ReservaAlquilerController]
})
export class DomainModule {}
