import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoDto } from './create-empleados.dto';

export class UpdateEmpleadoDto extends PartialType(CreateEmpleadoDto) {}
