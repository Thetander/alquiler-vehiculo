import { Module } from '@nestjs/common';

import { DevolucionesController } from '../../infrastructure/controllers/devoluciones.controller';
import { DevolucionEntity } from 'src/devoluciones/domain/entities/devoluciones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DevolucionEntity])],
  controllers: [DevolucionesController]
})
export class DevolucionesModule {}
