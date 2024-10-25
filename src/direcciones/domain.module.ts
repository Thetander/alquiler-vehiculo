import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { DireccionesController } from './infrastructure/controllers/direcciones.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [DireccionesController]
})
export class DomainModule {}
