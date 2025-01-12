import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradoresService } from '../administradores/applications/services/administradores/administradores.service';
import { AdministradoresController } from '../administradores/infrastructure/controllers/administradores/administradores.controller';
import { AdministradorEntity } from '../administradores/domain/entities/administradores.entity/administradores.entity';
import { PersonasModule } from '../personas/applications/modules/personas.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdministradorEntity]),
    PersonasModule,
  ],
  controllers: [AdministradoresController],
  providers: [AdministradoresService],
  exports: [AdministradoresService],
})
export class AdministradoresModule {}
