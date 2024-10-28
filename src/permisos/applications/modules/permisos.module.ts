import { Module } from '@nestjs/common';
import { PermisosController } from '../../infrastructure/controllers/permisos.controller';
import { PermisoEntity } from 'src/permisos/domain/entities/permisos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PermisoEntity])],
  controllers: [PermisosController]
})
export class PermisosModule {}
