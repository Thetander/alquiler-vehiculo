import { Module } from '@nestjs/common';
import { CargosController } from '../../infrastructure/controllers/cargos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargoEntity } from 'src/cargos/domain/entities/cargos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CargoEntity])],
  controllers: [CargosController]
})
export class CargosModule {}
