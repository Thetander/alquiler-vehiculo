import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { MenusController } from './infrastructure/controllers/menus.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [MenusController]
})
export class DomainModule {}
