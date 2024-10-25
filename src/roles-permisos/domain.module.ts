import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { RolesPermisosController } from './infrastructure/controllers/roles-permisos.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [RolesPermisosController]
})
export class DomainModule {}
