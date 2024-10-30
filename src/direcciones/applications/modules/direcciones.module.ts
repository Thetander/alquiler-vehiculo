import { Module } from '@nestjs/common';
import { DireccionController } from '../../infrastructure/controllers/direcciones.controller';
import { DireccionEntity } from 'src/direcciones/domain/entities/direcciones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionService } from '../services/direcciones.service';

@Module({
  imports: [TypeOrmModule.forFeature([DireccionEntity])],
  controllers: [DireccionController],
  providers:[DireccionService],
  exports:[DireccionService],
})
export class DireccionesModule {}
