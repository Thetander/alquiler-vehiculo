import { Module } from '@nestjs/common';
import { PermisosService } from './services/permisos.service';

@Module({
  providers: [PermisosService]
})
export class ModulesModule {}
