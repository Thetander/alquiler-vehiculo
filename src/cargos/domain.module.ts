import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { CargosController } from './infrastructure/controllers/cargos.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [CargosController]
})
export class DomainModule {}
