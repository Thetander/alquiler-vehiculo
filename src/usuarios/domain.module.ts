import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { UsuariosController } from './infrastructure/controllers/usuarios.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [UsuariosController]
})
export class DomainModule {}
