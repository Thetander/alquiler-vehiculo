import { Module } from '@nestjs/common';
import { ReservaAlquilerController } from '../../infrastructure/controllers/reserva-alquiler.controller';
import { ReservaAlquilerEntity } from 'src/reserva-alquiler/domain/entities/reserva-alquiler.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaAlquilerEntity])],
  controllers: [ReservaAlquilerController]
})
export class ReservaAlquilerModule {}
