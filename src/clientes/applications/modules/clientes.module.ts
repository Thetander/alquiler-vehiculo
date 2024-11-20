import { Module } from '@nestjs/common';
import { ClienteController } from '../../infrastructure/controllers/clientes.controller';
import { ClienteEntity } from 'src/clientes/domain/entities/clientes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from '../services/clientes.service';
import { PersonaService } from 'personas/applications/services/personas.service';
import { PersonaEntity } from 'personas/domain/entities/personas.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity, PersonaEntity])],
  controllers: [ClienteController],
  exports:[ClienteService, PersonaService], 
  providers:[ClienteService, PersonaService]
})
export class ClientesModule {}
