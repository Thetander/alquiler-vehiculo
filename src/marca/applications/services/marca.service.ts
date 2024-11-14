import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarcaEntity } from 'marca/domain/entities/marca.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateMarcaDto, UpdateMarcaDto } from '../dto';

@Injectable()
export class MarcaService {
    constructor(
        @InjectRepository(MarcaEntity)
        private readonly marcaRepository: Repository<MarcaEntity>,
    ) {}

    async getMany() {
        return this.marcaRepository.find();
    }

    async getOne(id: number) {
        const marca = await this.marcaRepository.findOne({ where: { idMarca: id } });
        if (!marca) throw new NotFoundException('Marca not found');
        return marca;
    }

    async createOne(dto: CreateMarcaDto) {
        const newMarca = this.marcaRepository.create(dto as DeepPartial<MarcaEntity>);
        return await this.marcaRepository.save(newMarca);
    }

    async editOne(dto: UpdateMarcaDto, id: number) {
        const marca = await this.getOne(id);
        const editedMarca = Object.assign(marca, dto);
        return this.marcaRepository.save(editedMarca);
    }

    async deleteOne(id: number) {
        const marca = await this.getOne(id);
        return await this.marcaRepository.remove(marca);
    }
}
