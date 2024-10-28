import { Module } from '@nestjs/common';

import { ProvinciasController } from '../../infrastructure/controllers/provincias.controller';
import { ProvinciasService } from '../services/provincias.service';
import { ProvinciaEntity } from 'src/provincias/domain/entities/provincias.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProvinciaEntity])],
  controllers: [ProvinciasController],
  providers: [ProvinciasService]
})
export class ProvinciasModule {}
