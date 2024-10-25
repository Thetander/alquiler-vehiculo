import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { CiudadesController } from './infrastructure/controllers/ciudades.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [CiudadesController]
})
export class DomainModule {}
