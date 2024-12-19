import { PartialType } from '@nestjs/mapped-types';
import { CreateDevolucionDto } from '../dto/create-devoluciones.dto';

export class EditDevolucionDto extends PartialType(CreateDevolucionDto) {}
