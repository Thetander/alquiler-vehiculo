import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadosService } from '../services/empleados.service';
import { EmpleadosController } from '../../infrastructure/controllers/empleados.controller';
import { EmpleadoEntity } from '../../domain/entities/empleados.entity';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';
import { CargoEntity } from 'src/cargos/domain/entities/cargos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoEntity, PersonaEntity, CargoEntity])],
  providers: [EmpleadosService],
  controllers: [EmpleadosController],
  exports: [EmpleadosService],
})
export class EmpleadosModule {}
