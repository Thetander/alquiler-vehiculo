import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "src/auth/domain/services/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService
    ) {
        super({
            usernameField: 'idPersona',  // Campo usado en lugar de 'email'
            passwordField: 'password'
        });
    }

    async validate(idPersona: number, password: string) {
        const employeed = await this.authService.validateUser(idPersona, password);
        console.log(idPersona, password);

        if (!employeed) throw new UnauthorizedException('Login User or password does not match');
        return employeed;
    }
}
