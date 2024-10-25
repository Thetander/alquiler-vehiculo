import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { ClientesController } from './infrastructure/controllers/clientes.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [ClientesController]
})
export class DomainModule {}
