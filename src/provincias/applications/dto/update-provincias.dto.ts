import { PartialType } from '@nestjs/mapped-types';
import { CreateProvinciaDto } from './create-provincias.dto';

export class EditProvinciaDto extends PartialType(CreateProvinciaDto) {}
