import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinciaDto } from '../../applications/dto/create-provincias.dto';
import { EditProvinciaDto } from '../../applications/dto/update-provincias.dto';
import { ProvinciaEntity } from '../../domain/entities/provincias.entity';

@Injectable()
export class ProvinciaService {
    constructor(
        @InjectRepository(ProvinciaEntity)
        private readonly provinciaRepository: Repository<ProvinciaEntity>,
    ) {}

    async getMany() {
        return await this.provinciaRepository.find();
    }

    async getOne(id: number) {
        return await this.provinciaRepository.findOne({ where: { idProvincia: id } });
    }

    async createOne(dto: CreateProvinciaDto) {
        const provinciaExist = await this.provinciaRepository.findOne({ where: { nombre: dto.nombre } });
        if (provinciaExist) throw new BadRequestException('Province already registered with this name');

        const newProvincia = this.provinciaRepository.create(dto);
        return await this.provinciaRepository.save(newProvincia);
    }

    async editOne(id: number, dto: EditProvinciaDto) {
        const provincia = await this.getOne(id);
        const editedProvincia = Object.assign(provincia, dto);
        return await this.provinciaRepository.save(editedProvincia);
    }

    async deleteOne(id: number) {
        const provincia = await this.getOne(id);
        return await this.provinciaRepository.remove(provincia);
    }
}
