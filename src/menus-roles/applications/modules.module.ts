import { Module } from '@nestjs/common';
import { MenusRolesService } from './services/menus-roles.service';

@Module({
  providers: [MenusRolesService]
})
export class ModulesModule {}
