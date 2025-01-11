import { forwardRef, Module } from '@nestjs/common';
import { UsuarioController } from '../../infrastructure/controllers/usuarios.controller';
import { UsuarioEntity } from 'src/usuarios/domain/entities/usuarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from '../services/usuarios.service';
import { PersonaService } from 'personas/applications/services/personas.service';
import { PersonaEntity } from 'personas/domain/entities/personas.entity';
import { AuthModule } from 'auth/applications/modules/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity, PersonaEntity]),forwardRef(() => AuthModule),],
  controllers: [UsuarioController],
  providers: [UsuarioService, PersonaService],
  exports: [UsuarioService, PersonaService],

})
export class UsuariosModule {}
