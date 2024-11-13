import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCargoDto } from '../dto/create-cargos.dto';
import { EditCargoDto } from '../dto/update-cargos.dto';
import { CargoEntity } from 'src/cargos/domain/entities/cargos.entity';

@Injectable()
export class CargoService {
    constructor(
        @InjectRepository(CargoEntity)
        private readonly cargoRepository: Repository<CargoEntity>,
    ) {}

    async getMany() {
        return await this.cargoRepository.find();
    }

    async getOne(idCargo: number) {
        const cargo = await this.cargoRepository.findOne({ where: { idCargo} });
        if (!cargo) throw new NotFoundException('Cargo not found');
        return cargo;
    }

    async createOne(dto: CreateCargoDto) {
        const newCargo = this.cargoRepository.create(dto);
        return await this.cargoRepository.save(newCargo);
    }

    async editOne(id: number, dto: EditCargoDto) {
        const cargo = await this.getOne(id);
        const editedCargo = Object.assign(cargo, dto);
        return await this.cargoRepository.save(editedCargo);
    }

    async deleteOne(id: number) {
        const cargo = await this.getOne(id);
        return await this.cargoRepository.remove(cargo);
    }
}
