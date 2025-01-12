import { Module } from '@nestjs/common';
import { EmpleadosController } from '../../infrastructure/controllers/empleados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoEntity } from 'src/empleados/domain/entities/empleados.entity';
import { PersonasModule } from 'personas/applications/modules/personas.module';
import { EmpleadosService } from '../services/empleados.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoEntity]),
PersonasModule],
  
  controllers: [EmpleadosController],
  providers:[EmpleadosService],
  exports:[EmpleadosService ]

})
export class EmpleadosModule {}
