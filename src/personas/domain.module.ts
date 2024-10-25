import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { PersonasController } from './infrastructure/controllers/personas.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [PersonasController]
})
export class DomainModule {}
