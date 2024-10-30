import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { ClienteEntity } from '../../domain/entities/clientes.entity';
import { CreateClienteDto } from '../dto/create-clientes.dto';
import { EditClienteDto } from '../dto/update-clientes.dto';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(ClienteEntity)
        private readonly clienteRepository: Repository<ClienteEntity>,
    ) {}

    async getMany() {
        return await this.clienteRepository.find();
    }

    async getOne(idCliente: number) {
        const cliente = await this.clienteRepository.findOne({ where: { idCliente } });
        if (!cliente) throw new NotFoundException('Cliente not found');
        return cliente;
    }

    async createOne(dto: CreateClienteDto) {
        const newCliente = this.clienteRepository.create(dto as DeepPartial<ClienteEntity>);
        return await this.clienteRepository.save(newCliente);
    }

    async editOne(id: number, dto: EditClienteDto) {
        const cliente = await this.getOne(id);
        const editedCliente = Object.assign(cliente, dto);
        return await this.clienteRepository.save(editedCliente);
    }

    async deleteOne(id: number) {
        const cliente = await this.getOne(id);
        return await this.clienteRepository.remove(cliente);
    }
}
