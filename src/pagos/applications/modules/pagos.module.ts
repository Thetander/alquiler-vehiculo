import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaccion } from '../../domain/entities/transaccion.entity';
import { TransaccionService } from '../service/transaccion.service';
import { TransaccionController } from '../../infrastructure/controller/transaccion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Transaccion])],
  controllers: [TransaccionController],
  providers: [TransaccionService],
  exports: [TransaccionService],
})
export class PagosModule {}
