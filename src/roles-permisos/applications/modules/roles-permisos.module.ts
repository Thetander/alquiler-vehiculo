import { Module } from '@nestjs/common';
import { RolesPermisosController } from '../../infrastructure/controllers/roles-permisos.controller';
import { RolesPermisosEntity } from 'src/roles-permisos/domain/entities/roles-permisos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesPermisosService } from '../services/roles-permisos.service';

@Module({
  imports: [TypeOrmModule.forFeature([RolesPermisosEntity])],
  controllers: [RolesPermisosController],
  providers:[RolesPermisosService],
  exports:[RolesPermisosService],
})
export class RolesPermisosModule {}
