import { Module } from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { AuthController } from '../../infrastructure/controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy, LocalStrategy } from '../../infrastructure/strategy/index';
import { PersonasModule } from '../../../personas/applications/modules/personas.module';
import { UsuariosModule } from '../../../usuarios/applications/modules/usuarios.module';  
import { JWT_SECRET } from '../../../config/constans';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    PersonasModule,
    UsuariosModule,  
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>(JWT_SECRET),
        signOptions: { expiresIn: '50m' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
