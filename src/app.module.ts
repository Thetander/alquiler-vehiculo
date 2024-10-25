import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './provincias/domain.module';
import { ModulesModule } from './ciudades/applications/modules.module';
import { DomainModule } from './ciudades/domain.module';
import { ModulesModule } from './direcciones/applications/modules.module';
import { DomainModule } from './direcciones/domain.module';
import { ModulesModule } from './personas/applications/modules.module';
import { DomainModule } from './personas/domain.module';
import { ModulesModule } from './usuarios/applications/modules.module';
import { DomainModule } from './usuarios/domain.module';
import { ModulesModule } from './clientes/applications/modules.module';
import { DomainModule } from './clientes/domain.module';
import { ModulesModule } from './empleados/applications/modules.module';
import { DomainModule } from './empleados/domain.module';
import { ModulesModule } from './cargos/applications/modules.module';
import { DomainModule } from './cargos/domain.module';
import { ModulesModule } from './vehiculos/applications/modules.module';
import { DomainModule } from './vehiculos/domain.module';
import { ModulesModule } from './estados-vehiculos/applications/modules.module';
import { DomainModule } from './estados-vehiculos/domain.module';
import { ModulesModule } from './reserva-alquiler/applications/modules.module';
import { DomainModule } from './reserva-alquiler/domain.module';
import { ModulesModule } from './devoluciones/applications/modules.module';
import { DomainModule } from './devoluciones/domain.module';
import { ModulesModule } from './historial-facturas/applications/modules.module';
import { DomainModule } from './historial-facturas/domain.module';
import { ModulesModule } from './roles/applications/modules.module';
import { DomainModule } from './roles/domain.module';
import { ModulesModule } from './permisos/applications/modules.module';
import { DomainModule } from './permisos/domain.module';
import { ModulesModule } from './menus/applications/modules.module';
import { DomainModule } from './menus/domain.module';
import { ModulesModule } from './roles-permisos/applications/modules.module';
import { DomainModule } from './roles-permisos/domain.module';
import { ModulesModule } from './menus-roles/applications/modules.module';
import { DomainModule } from './menus-roles/domain.module';

@Module({
  imports: [DomainModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
