import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModeloEntity } from 'modelo/domain/entities/modelo.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateModeloDto, UpdateModeloDto } from '../dto';

@Injectable()
export class ModeloService {
    constructor(
        @InjectRepository(ModeloEntity)
        private readonly modeloRepository: Repository<ModeloEntity>,
    ) {}

    async getMany() {
        return this.modeloRepository.find();
    }

    async getOne(id: number) {
        const modelo = await this.modeloRepository.findOne({ where: { idModelo: id } });
        if (!modelo) throw new NotFoundException('Modelo not found');
        return modelo;
    }

    async createOne(dto: CreateModeloDto) {
        const newModelo = this.modeloRepository.create(dto as DeepPartial<ModeloEntity>);
        return await this.modeloRepository.save(newModelo);
    }

    async editOne(dto: UpdateModeloDto, id: number) {
        const modelo = await this.getOne(id);
        const editedModelo = Object.assign(modelo, dto);
        return this.modeloRepository.save(editedModelo);
    }

    async deleteOne(id: number) {
        const modelo = await this.getOne(id);
        return await this.modeloRepository.remove(modelo);
    }

    async getModelosByMarca(idMarca: number) {
        return this.modeloRepository.find({ where: { marca: { idMarca } } });
    }
}
