import { Module } from '@nestjs/common';
import { UsuariosService } from './services/usuarios.service';

@Module({
  providers: [UsuariosService]
})
export class ModulesModule {}
