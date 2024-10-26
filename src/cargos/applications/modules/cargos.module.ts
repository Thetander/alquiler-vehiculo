import { Module } from '@nestjs/common';
import { CargosController } from '../../infrastructure/controllers/cargos.controller';

@Module({
  imports: [],
  controllers: [CargosController]
})
export class CargosModule {}
