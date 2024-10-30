import { PartialType } from '@nestjs/mapped-types';
import { CreateCiudadDto } from './create-ciudades.dto';

export class EditCiudadDto extends PartialType(CreateCiudadDto) {}