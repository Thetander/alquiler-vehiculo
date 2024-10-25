import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { VehiculosController } from './infrastructure/controllers/vehiculos.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [VehiculosController]
})
export class DomainModule {}
