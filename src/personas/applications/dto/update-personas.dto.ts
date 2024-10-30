import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from '../dto/create-personas.dto';

export class EditPersonaDto extends PartialType(CreatePersonaDto) {}
