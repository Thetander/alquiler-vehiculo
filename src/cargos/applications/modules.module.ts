import { Module } from '@nestjs/common';
import { CargosService } from './services/cargos.service';

@Module({
  providers: [CargosService]
})
export class ModulesModule {}
