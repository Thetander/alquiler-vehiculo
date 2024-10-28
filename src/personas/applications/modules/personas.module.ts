import { Module } from '@nestjs/common';
import { PersonasController } from '../../infrastructure/controllers/personas.controller';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaEntity])],
  controllers: [PersonasController]
})
export class PersonasModule {}
