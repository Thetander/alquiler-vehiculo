import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from '../dto/create-clientes.dto';

export class EditClienteDto extends PartialType(CreateClienteDto) {}
