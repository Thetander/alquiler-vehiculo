import { Module } from '@nestjs/common';
import { ClientesService } from './services/clientes.service';

@Module({
  providers: [ClientesService]
})
export class ModulesModule {}
