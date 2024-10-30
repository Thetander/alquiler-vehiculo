import { Module } from '@nestjs/common';
import { UsuarioController } from '../../infrastructure/controllers/usuarios.controller';
import { UsuarioEntity } from 'src/usuarios/domain/entities/usuarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from '../services/usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  exports: [UsuarioService],
  providers: [UsuarioService]
})
export class UsuariosModule {}
