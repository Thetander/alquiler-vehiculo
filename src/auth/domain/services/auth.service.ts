import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioService } from '../../../usuarios/applications/services/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../../applications/dto/login.dto';
import { UsuarioEntity } from '../../../usuarios/domain/entities/usuarios.entity';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const usuario = await this.usuarioService.findOneByEmail(email);
    if (usuario && await bcrypt.compare(pass, usuario.password)) {
      return usuario;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const usuario = await this.validateUser(email, password);
    if (!usuario) {
      throw new NotFoundException('Credenciales inválidas');
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

  async recoverPassword(email: string): Promise<void> {
    const usuario = await this.usuarioService.findOneByEmail(email);
    if (!usuario) {
      throw new NotFoundException('El usuario con este correo no existe.');
    }

    const newPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.usuarioService.updatePassword(usuario.idUsuario, hashedPassword);

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Recuperación de contraseña',
      text: `Hola, se ha generado una nueva contraseña para tu cuenta: ${newPassword}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Correo enviado correctamente a ${email}`);
    } catch (error) {
      console.error(`Error enviando correo: ${error.message}`);
      throw new NotFoundException('No se pudo enviar el correo. Intente más tarde.');
    }
  }
}
