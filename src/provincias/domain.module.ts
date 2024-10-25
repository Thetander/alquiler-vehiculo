import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { ProvinciasController } from './infrastructure/controllers/provincias.controller';
import { ProvinciasService } from './applications/services/provincias.service';

@Module({
  imports: [InfrastructureModule],
  controllers: [ProvinciasController],
  providers: [ProvinciasService]
})
export class DomainModule {}
