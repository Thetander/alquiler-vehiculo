import { Module } from '@nestjs/common';
import { EmpleadosService } from './services/empleados.service';

@Module({
  providers: [EmpleadosService]
})
export class ModulesModule {}
