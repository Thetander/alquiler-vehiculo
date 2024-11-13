import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesPermisosDto } from './create-roles-permisos.dto';

export class EditRolesPermisosDto extends PartialType(CreateRolesPermisosDto) {}
