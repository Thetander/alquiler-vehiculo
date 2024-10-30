import { Module } from '@nestjs/common';
import { PersonaController } from '../../infrastructure/controllers/personas.controller';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaService } from '../services/personas.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaEntity])],
  controllers: [PersonaController],
  exports: [PersonaService],
  providers: [PersonaService]
})
export class PersonasModule {}
