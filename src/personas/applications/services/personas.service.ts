import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';
import { CreatePersonaDto } from '../dto/create-personas.dto';
import { EditPersonaDto } from '../dto/update-personas.dto';

@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(PersonaEntity)
        private readonly personaRepository: Repository<PersonaEntity>,
    ) {}

    async getMany() {
        return await this.personaRepository.find();
    }

    async getOne(idPersona: number) {
        const persona = await this.personaRepository.findOne({ where: { idPersona } });
        if (!persona) throw new NotFoundException('Persona not found');
        return persona;
    }

    async createOne(dto: CreatePersonaDto) {
        const newPersona = this.personaRepository.create(dto);
        const savedPersona = await this.personaRepository.save(newPersona); 
        return savedPersona; 
    }

    async editOne(id: number, dto: EditPersonaDto) {
        const persona = await this.getOne(id);
        const editedPersona = Object.assign(persona, dto);
        return await this.personaRepository.save(editedPersona);
    }

    async deleteOne(id: number) {
        const persona = await this.getOne(id);
        return await this.personaRepository.remove(persona);
    }
}
