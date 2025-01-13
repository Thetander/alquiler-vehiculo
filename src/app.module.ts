import { PagosModule } from './pagos/applications/modules/pagos.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from './config/constans';
import { CargosModule } from './cargos/applications/modules/cargos.module';
import { CiudadesModule } from './ciudades/applications/modules/ciudades.module';
import { ClientesModule } from './clientes/applications/modules/clientes.module';
import { DevolucionModule } from './devoluciones/applications/modules/devoluciones.module';
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
import { AuthModule } from './auth/applications/modules/auth.module';
import { InfrastructureModule } from './tipos-vehiculos/applications/modules/tipo-vehiculo.module';
import { TipoVehiculoController } from './tipos-vehiculos/infrastructure/controllers/tipo-vehiculo.controller';
import { ColorController } from './color/infrastructure/controllers/color.controller';
import { ColorService } from 'src/color/applications/services/color.service';
import { ColorModule } from 'src/color/applications/modules/color.module';
import { MarcaModule } from './marca/applications/modules/marca.module';
import { MarcaService } from './marca/applications/services/marca.service';
import { MarcaController } from './marca/infrastructure/controllers/marca.controller';
import { ModeloService } from './modelo/applications/service/modelo.service';
import { ModeloController } from './modelo/infrastructure/controllers/modelo.controller';
import { ModeloModule } from './modelo/applications/modules/modelo.module';
import { LoggerMiddleware } from 'common/middlewares/logger.middleware';

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
    PagosModule,
    CargosModule,
    CiudadesModule,
    ClientesModule,
    DevolucionModule,
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
    VehiculosModule,
    AuthModule,
    InfrastructureModule,
    ColorModule,
    MarcaModule,
    ModeloModule,

  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('*'); 
  }
}