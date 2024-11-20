import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsuarioService } from 'src/usuarios/applications/services/usuarios.service';
import { JWT_SECRET } from '../../../config/constans';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(JWT_SECRET),
    });
  }

  async validate(payload: any) {
    const employeed = await this.usuarioService.findOneById(payload.sub);
    if (!employeed) {
      throw new NotFoundException('Invalid token');
    }
    return employeed;
  }
}
