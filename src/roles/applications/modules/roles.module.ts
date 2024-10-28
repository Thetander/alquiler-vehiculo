import { Module } from '@nestjs/common';
import { RolesController } from '../../infrastructure/controllers/roles.controller';
import { RolEntity } from 'src/roles/domain/entities/roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity])],
  controllers: [RolesController]
})
export class RolesModule {}
