import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { DevolucionesController } from './infrastructure/controllers/devoluciones.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [DevolucionesController]
})
export class DomainModule {}
