import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../../../usuarios/applications/services/usuarios.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../../applications/dto/login.dto';
import { UsuarioEntity } from '../../../usuarios/domain/entities/usuarios.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(idPersona: number, pass: string): Promise<any> {
    const usuario = await this.usuarioService.findOne({ idUsuario: idPersona });

    if (usuario && await compare(pass, usuario.password)) {
      return usuario;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const { idPersona, password } = loginDto;
    const usuario = await this.validateUser(idPersona, password);
    if (!usuario) {
      throw new Error('Credenciales inválidas');
    }

    const payload = { sub: usuario.idUsuario, role: usuario.rol };

    return {
      usuario: this.sanitizeUsuario(usuario),
      role: usuario.rol,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async generateAccessToken(usuario: UsuarioEntity) {
    const payload = { sub: usuario.idUsuario, role: usuario.rol };
    return this.jwtService.sign(payload);
  }

  sanitizeUsuario(usuario: UsuarioEntity) {
    const { password, ...rest } = usuario;
    return rest;
  }
}
