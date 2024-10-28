import { Module } from '@nestjs/common';
import { EmpleadosController } from '../../infrastructure/controllers/empleados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoEntity } from 'src/empleados/domain/entities/empleados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoEntity])],
  controllers: [EmpleadosController]
})
export class EmpleadosModule {}
