import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../domain/services/auth.service';
import { LoginDto } from '../../applications/dto/login.dto';
import { Auth } from 'src/common/decorators/helpers/auth.decorator';
import { UsuarioEntity } from '../../../usuarios/domain/entities/usuarios.entity';
import { Usuario } from '../../../common/decorators/helpers';
import { RecoverPasswordDto } from '../../applications/dto/recover-password.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginDto })  
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('recover-password')
  @ApiBody({ type: RecoverPasswordDto }) 
  async recoverPassword(@Body() dto: RecoverPasswordDto): Promise<any> {
    await this.authService.recoverPassword(dto.email);
    return { message: 'Se ha enviado una nueva contraseña al correo registrado' };
  }

  @Auth()
  @Get('profile')
  profile(@Usuario() usuario: UsuarioEntity) {
    return {
      message: 'Petición de perfil correcta',
      usuario: this.authService.sanitizeUsuario(usuario),
    };
  }

  @Auth()
  @Get('refresh')
  async refresh(@Usuario() usuario: UsuarioEntity) {
    await this.authService.generateAccessToken(usuario);
    return {
      message: 'Refresh exitoso',
    };
  }
}
