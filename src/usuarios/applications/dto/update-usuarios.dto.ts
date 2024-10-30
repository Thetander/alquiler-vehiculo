import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from '../dto/create-usuarios.dto';

export class EditUsuarioDto extends PartialType(CreateUsuarioDto) {}
