import { Module } from '@nestjs/common';
import { RolesPermisosService } from './services/roles-permisos.service';

@Module({
  providers: [RolesPermisosService]
})
export class ModulesModule {}
