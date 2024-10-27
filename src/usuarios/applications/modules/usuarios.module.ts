import { Module } from '@nestjs/common';
import { UsuariosController } from '../../infrastructure/controllers/usuarios.controller';
import { UsuarioEntity } from 'src/usuarios/domain/entities/usuarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuariosController]
})
export class UsuariosModule {}
