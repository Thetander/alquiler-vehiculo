import { PartialType } from '@nestjs/mapped-types';
import { CreateRolDto } from '../dto/create-roles.dto';

export class EditRolDto extends PartialType(CreateRolDto) {}
