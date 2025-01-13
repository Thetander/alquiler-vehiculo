import { PartialType } from '@nestjs/swagger';
import { CreateCargoDto } from '../dto/create-cargos.dto';

export class UpdateCargoDto extends PartialType(CreateCargoDto) {}
