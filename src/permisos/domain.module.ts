import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { PermisosController } from './infrastructure/controllers/permisos.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [PermisosController]
})
export class DomainModule {}
