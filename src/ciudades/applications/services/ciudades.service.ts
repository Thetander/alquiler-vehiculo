import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CiudadEntity } from 'src/ciudades/domain/entities/ciudades.entity';
import { CreateCiudadDto } from '../../applications/dto/create-ciudades.dto';
import { EditCiudadDto } from '../../applications/dto/update-ciudades.dto';

@Injectable()
export class CiudadService {
    constructor(
        @InjectRepository(CiudadEntity)
        private readonly ciudadRepository: Repository<CiudadEntity>,
    ) {}

    async getMany() {
        return await this.ciudadRepository.find();
    }

    async getOne(idCiudad: number) {
        const ciudad = await this.ciudadRepository.findOne({ where: { idCiudad } });
        if (!ciudad) throw new NotFoundException('Ciudad not found');
        return ciudad;
    }

    async createOne(dto: CreateCiudadDto) {
        const newCiudad = this.ciudadRepository.create(dto);
        return await this.ciudadRepository.save(newCiudad);
    }

    async editOne(id: number, dto: EditCiudadDto) {
        const ciudad = await this.getOne(id);
        const editedCiudad = Object.assign(ciudad, dto);
        return await this.ciudadRepository.save(editedCiudad);
    }

    async deleteOne(id: number) {
        const ciudad = await this.getOne(id);
        return await this.ciudadRepository.remove(ciudad);
    }
}
