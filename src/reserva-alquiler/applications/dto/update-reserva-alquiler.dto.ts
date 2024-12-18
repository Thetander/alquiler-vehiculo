import { PartialType } from '@nestjs/mapped-types';
import { CreateReservaAlquilerDto } from './create-reserva-alquiler.dto';

export class EditReservaAlquilerDto extends PartialType(CreateReservaAlquilerDto) {}
