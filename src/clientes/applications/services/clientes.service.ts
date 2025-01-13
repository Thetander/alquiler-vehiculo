
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { ClienteEntity } from 'src/clientes/domain/entities/clientes.entity';
import { CreateClienteDto } from '../dto/create-clientes.dto';
import { EditClienteDto } from '../dto/update-clientes.dto';
import { PersonaEntity } from 'personas/domain/entities/personas.entity';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(ClienteEntity)
        private readonly clienteRepository: Repository<ClienteEntity>,
        @InjectRepository(PersonaEntity)
        private readonly personaRepository: Repository<PersonaEntity>,
    ) {}

    async getMany() {
      return await this.clienteRepository.find({
          relations: ['persona'], 
      });
  }
  

    async getOne(idCliente: number) {
      const cliente = await this.clienteRepository.findOne({
          where: { idCliente },
          relations: ['persona'], 
      });
      if (!cliente) throw new NotFoundException('Cliente not found');
      return cliente;
  }
  

    async findByCedula(cedula: string) {
        // persona por cédula
        const persona = await this.personaRepository.findOne({ where: { cedula } });
        if (!persona) {
          throw new NotFoundException('Persona no encontrada');
        }
      
        // cliente asociado a la persona
        const cliente = await this.clienteRepository.findOne({
          where: { persona: { idPersona: persona.idPersona } },
          relations: ['persona'], 
        });
      
        if (!cliente) {
          throw new NotFoundException('Cliente no encontrado');
        }
      
        return cliente;
      }
      

    async createOne(dto: CreateClienteDto) {
        const persona = await this.personaRepository.findOne({
          where: { idPersona: dto.idPersona },
        });
    
        if (!persona) {
          throw new NotFoundException('Persona not found');
        }
    
        const cliente = new ClienteEntity();
        cliente.persona = persona;
    
        return await this.clienteRepository.save(cliente);
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