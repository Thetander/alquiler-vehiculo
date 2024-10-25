import { Module } from '@nestjs/common';
import { MenusService } from './services/menus.service';

@Module({
  providers: [MenusService]
})
export class ModulesModule {}
