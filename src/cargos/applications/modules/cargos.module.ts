import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargosService } from '../services/cargos.service';
import { CargosController } from '../../infrastructure/controllers/cargos.controller';
import { CargoEntity } from '../../domain/entities/cargos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CargoEntity])],
  controllers: [CargosController],
  providers: [CargosService],
  exports: [CargosService],
})
export class CargosModule {}
