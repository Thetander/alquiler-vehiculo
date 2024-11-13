import { IsNumber } from 'class-validator';

export class CreateRolesPermisosDto {
    @IsNumber()
    idRol: number;

    @IsNumber()
    idPermiso: number;
}
