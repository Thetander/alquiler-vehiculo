import { Module } from '@nestjs/common';
import { RolController } from 'src/roles/infrastructure/controllers/roles.controller';
import { RolEntity } from 'src/roles/domain/entities/roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolService } from 'src/roles/applications/services/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity])],
  controllers: [RolController],
  exports: [RolService],
  providers:[RolService]
})
export class RolesModule {}
