import { PartialType } from '@nestjs/mapped-types';
import { CreateRolDto } from 'src/roles/applications/dto/create-roles.dto';

export class EditRolDto extends PartialType(CreateRolDto) {}
