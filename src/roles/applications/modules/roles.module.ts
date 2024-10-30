import { Module } from '@nestjs/common';
import { RolController } from '../../infrastructure/controllers/roles.controller';
import { RolEntity } from 'src/roles/domain/entities/roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolService } from '../services/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity])],
  controllers: [RolController],
  exports: [RolService],
  providers:[RolService]
})
export class RolesModule {}
