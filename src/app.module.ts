import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from './config/constans';
import { CargosModule } from './cargos/applications/modules/cargos.module';
import { CiudadesModule } from './ciudades/applications/modules/ciudades.module';
import { ClientesModule } from './clientes/applications/modules/clientes.module';
import { DevolucionesModule } from './devoluciones/applications/modules/devoluciones.module';
import { DireccionesModule } from './direcciones/applications/modules/direcciones.module';
import { EmpleadosModule } from './empleados/applications/modules/empleados.module';
import { EstadosVehiculosModule } from './estados-vehiculos/applications/modules/estados-vehiculos.module';
import { HistorialFacturasModule } from './historial-facturas/applications/modules/historial-facturas.module';
import { MenusModule } from './menus/applications/modules/menus.module';
import { MenusRolesModule } from './menus-roles/applications/modules/menus-roles.module';
import { PermisosModule } from './permisos/applications/modules/permisos.module';
import { PersonasModule } from './personas/applications/modules/personas.module';
import { ProvinciasModule } from './provincias/applications/modules/provincias.module';
import { ReservaAlquilerModule } from './reserva-alquiler/applications/modules/reserva-alquiler.module';
import { RolesModule } from './roles/applications/modules/roles.module';
import { RolesPermisosModule } from './roles-permisos/applications/modules/roles-permisos.module';
import { UsuariosModule } from './usuarios/applications/modules/usuarios.module';
import { VehiculosModule } from './vehiculos/applications/modules/vehiculos.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>(DATABASE_HOST),
        port: parseInt(config.get<string>(DATABASE_PORT), 10),
        username: config.get<string>(DATABASE_USERNAME),
        password: config.get<string>(DATABASE_PASSWORD),
        database: config.get<string>(DATABASE_NAME),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        dropSchema: false,
        logging: true,
        ssl: process.env.POSTGRES_SSL === 'true',
        extra: {
          ssl:
            process.env.POSTGRES_SSL === 'true'
              ? {
                rejectUnauthorized: false,
              }
              : null,
        },
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CargosModule,
    CiudadesModule,
    ClientesModule,
    DevolucionesModule,
    DireccionesModule,
    EmpleadosModule,
    EstadosVehiculosModule,
    HistorialFacturasModule,
    MenusModule,
    MenusRolesModule,
    PermisosModule,
    PersonasModule,
    ProvinciasModule,
    ReservaAlquilerModule,
    RolesModule,
    RolesPermisosModule,
    UsuariosModule,
    VehiculosModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
