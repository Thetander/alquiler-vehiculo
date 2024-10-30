import { IsString, MaxLength } from 'class-validator';

export class CreateRolDto {
    @IsString()
    @MaxLength(100)
    nombre: string;

    @IsString()
    descripcion: string;
}
