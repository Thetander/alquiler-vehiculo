import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { RolesController } from './infrastructure/controllers/roles.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [RolesController]
})
export class DomainModule {}
