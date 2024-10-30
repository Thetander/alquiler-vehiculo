import { PartialType } from '@nestjs/mapped-types';
import { CreateDireccionDto } from './create-direcciones.dto';

export class EditDireccionDto extends PartialType(CreateDireccionDto) {}
