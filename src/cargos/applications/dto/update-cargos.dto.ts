import { PartialType } from '@nestjs/mapped-types';
import { CreateCargoDto } from '../dto/create-cargos.dto';

export class EditCargoDto extends PartialType(CreateCargoDto) {}
