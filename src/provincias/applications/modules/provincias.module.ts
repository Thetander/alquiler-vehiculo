import { Module } from '@nestjs/common';

import { ProvinciaController } from '../../infrastructure/controllers/provincias.controller';
import { ProvinciaService } from '../services/provincias.service';
import { ProvinciaEntity } from '../../domain/entities/provincias.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProvinciaEntity])],
  controllers: [ProvinciaController],
  providers: [ProvinciaService],
  exports:[ProvinciaService],
})
export class ProvinciasModule {}
