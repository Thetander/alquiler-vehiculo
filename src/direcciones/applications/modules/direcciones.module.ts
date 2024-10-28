import { Module } from '@nestjs/common';
import { DireccionesController } from '../../infrastructure/controllers/direcciones.controller';
import { DireccionEntity } from 'src/direcciones/domain/entities/direcciones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DireccionEntity])],
  controllers: [DireccionesController]
})
export class DireccionesModule {}
