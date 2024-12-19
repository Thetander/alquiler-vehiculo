import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialFacturaDto } from '../dto/create-historial-facturas.dto';

export class EditHistorialFacturaDto extends PartialType(CreateHistorialFacturaDto) {}
