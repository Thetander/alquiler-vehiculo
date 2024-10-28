import { Module } from '@nestjs/common';
import { MenusRolesController } from '../../infrastructure/controllers/menus-roles.controller';
import { MenuRolEntity } from 'src/menus-roles/domain/entities/menus-roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MenuRolEntity])],
  controllers: [MenusRolesController]
})
export class MenusRolesModule {}
