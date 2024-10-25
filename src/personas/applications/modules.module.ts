import { Module } from '@nestjs/common';
import { PersonasService } from './services/personas.service';

@Module({
  providers: [PersonasService]
})
export class ModulesModule {}
