import { Module } from '@nestjs/common';
import { CiudadController } from '../../infrastructure/controllers/ciudades.controller';
import { CiudadEntity } from 'src/ciudades/domain/entities/ciudades.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadService } from '../services/ciudades.service';

@Module({
  imports: [TypeOrmModule.forFeature([CiudadEntity])],
  controllers: [CiudadController],
  providers:[CiudadService],
  exports:[CiudadService]
})
export class CiudadesModule {}
