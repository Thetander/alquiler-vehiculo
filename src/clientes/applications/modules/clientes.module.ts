import { Module } from '@nestjs/common';
import { ClientesController } from '../../infrastructure/controllers/clientes.controller';
import { ClienteEntity } from 'src/clientes/domain/entities/clientes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity])],
  controllers: [ClientesController]
})
export class ClientesModule {}
