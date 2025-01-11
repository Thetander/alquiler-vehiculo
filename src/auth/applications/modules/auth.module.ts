import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { AuthController } from '../../infrastructure/controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy, LocalStrategy } from '../../infrastructure/strategy/index';
import { PersonasModule } from '../../../personas/applications/modules/personas.module';
import { UsuariosModule } from '../../../usuarios/applications/modules/usuarios.module';  
import { JWT_SECRET } from '../../../config/constans';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'auth/infrastructure/guards/roles.guard';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    PersonasModule,
    forwardRef(() => UsuariosModule),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>(JWT_SECRET),
        signOptions: { expiresIn: '50m' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
