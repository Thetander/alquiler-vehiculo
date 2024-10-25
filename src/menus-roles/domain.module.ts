import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { MenusRolesController } from './infrastructure/controllers/menus-roles.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [MenusRolesController]
})
export class DomainModule {}
