import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevolucionEntity } from '../../domain/entities/devoluciones.entity';
import { DevolucionService } from '../services/devoluciones.service';
import { DevolucionController } from '../../infrastructure/controllers/devoluciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DevolucionEntity])],
  providers: [DevolucionService],
  controllers: [DevolucionController],
  exports: [DevolucionService],
})
export class DevolucionModule {}
