import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { EstadosVehiculosController } from './infrastructure/controllers/estados-vehiculos.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [EstadosVehiculosController]
})
export class DomainModule {}
