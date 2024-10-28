import { Module } from '@nestjs/common';
import { CiudadesController } from '../../infrastructure/controllers/ciudades.controller';
import { CiudadEntity } from 'src/ciudades/domain/entities/ciudades.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CiudadEntity])],
  controllers: [CiudadesController]
})
export class CiudadesModule {}
