import { Module } from '@nestjs/common';
import { RolesPermisosController } from '../../infrastructure/controllers/roles-permisos.controller';
import { RolesPermisosEntity } from 'src/roles-permisos/domain/entities/roles-permisos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RolesPermisosEntity])],
  controllers: [RolesPermisosController]
})
export class RolesPermisosModule {}
