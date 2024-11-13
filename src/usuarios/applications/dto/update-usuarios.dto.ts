import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from 'src/usuarios/applications/dto/create-usuarios.dto';

export class EditUsuarioDto extends PartialType(CreateUsuarioDto) {}
