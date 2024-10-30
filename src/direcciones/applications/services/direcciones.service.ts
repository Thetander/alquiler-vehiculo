import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDireccionDto } from '../dto/create-direcciones.dto';
import { EditDireccionDto } from '../dto/update-direcciones.dto';
import { DireccionEntity } from '../../domain/entities/direcciones.entity';

@Injectable()
export class DireccionService {
    constructor(
        @InjectRepository(DireccionEntity)
        private readonly direccionRepository: Repository<DireccionEntity>,
    ) {}

    async getMany() {
        return await this.direccionRepository.find();
    }

    async getOne(id: number) {
        return await this.direccionRepository.findOne({ where: { idDireccion: id } });
    }

    async createOne(dto: CreateDireccionDto) {
        const newDireccion = this.direccionRepository.create(dto);
        return await this.direccionRepository.save(newDireccion);
    }

    async editOne(id: number, dto: EditDireccionDto) {
        const direccion = await this.getOne(id);
        const editedDireccion = Object.assign(direccion, dto);
        return await this.direccionRepository.save(editedDireccion);
    }

    async deleteOne(id: number) {
        const direccion = await this.getOne(id);
        return await this.direccionRepository.remove(direccion);
    }
}
