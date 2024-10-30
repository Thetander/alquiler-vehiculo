import { PartialType } from '@nestjs/mapped-types';
import { CreateVehiculoDto } from '../dto/create-vehiculos.dto';

export class EditVehiculoDto extends PartialType(CreateVehiculoDto) {}
