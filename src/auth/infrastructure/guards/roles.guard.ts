import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../../../auth/roles.decorator';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('No está autenticado.');
    }

    const token = authHeader.split(' ')[1];

    try {
      const payload = this.jwtService.verify(token); 
      const userRole = payload.role; 

      if (!requiredRoles.includes(userRole)) {
        throw new UnauthorizedException(
          'No tiene permiso para acceder a este recurso.',
        );
      }
      return true;
    } catch (err) {
      throw new UnauthorizedException(
        'Token inválido o no autorizado. Verifique su autenticación.',
      );
    }
  }
}
