import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { HistorialFacturasController } from './infrastructure/controllers/historial-facturas.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [HistorialFacturasController]
})
export class DomainModule {}
