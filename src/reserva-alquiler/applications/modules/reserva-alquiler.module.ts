import { Module } from '@nestjs/common';
import { ReservaAlquilerController } from '../../infrastructure/controllers/reserva-alquiler.controller';
import { ReservaAlquilerEntity } from 'src/reserva-alquiler/domain/entities/reserva-alquiler.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaAlquilerService } from '../services/reserva-alquiler.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaAlquilerEntity])],
  controllers: [ReservaAlquilerController],
  providers:[ReservaAlquilerService],
  exports:[ReservaAlquilerService],
})
export class ReservaAlquilerModule {}
