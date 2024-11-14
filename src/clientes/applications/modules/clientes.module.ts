import { Module } from '@nestjs/common';
import { ClienteController } from '../../infrastructure/controllers/clientes.controller';
import { ClienteEntity } from 'src/clientes/domain/entities/clientes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from '../services/clientes.service';
@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity])],
  controllers: [ClienteController],
  exports:[ClienteService], 
  
  providers:[ClienteService]
})
export class ClientesModule {}
