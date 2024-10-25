import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { EmpleadosController } from './infrastructure/controllers/empleados.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [EmpleadosController]
})
export class DomainModule {}
