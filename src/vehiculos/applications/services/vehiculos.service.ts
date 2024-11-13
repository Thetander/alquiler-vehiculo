import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like } from 'typeorm';
import { VehiculoEntity } from 'src/vehiculos/domain/entities/vehiculos.entity/vehiculos.entity';
import { CreateVehiculoDto } from '../dto/create-vehiculos.dto';
import { EditVehiculoDto } from '../dto/update-vehiculos.dto';

@Injectable()
export class VehiculoService {
    constructor(
        @InjectRepository(VehiculoEntity)
        private readonly vehiculoRepository: Repository<VehiculoEntity>,
    ) {}

    async getMany() {
        return await this.vehiculoRepository.find();
    }

    async getFiltered(filter: string) {
        return await this.vehiculoRepository.find({ where: { tipoVehiculo: filter } });
    }

    async getOne(idVehiculo: number) {
        const vehiculo = await this.vehiculoRepository.findOne({ where: { idVehiculo } });
        if (!vehiculo) throw new NotFoundException('Vehiculo not found');
        return vehiculo;
    }

    async createOne(dto: CreateVehiculoDto) {
        const newVehiculo = this.vehiculoRepository.create(dto);
        return await this.vehiculoRepository.save(newVehiculo);
    }

    async editOne(id: number, dto: EditVehiculoDto) {
        const vehiculo = await this.getOne(id);
        const editedVehiculo = Object.assign(vehiculo, dto);
        return await this.vehiculoRepository.save(editedVehiculo);
    }

    async deleteOne(id: number) {
        const vehiculo = await this.getOne(id);
        return await this.vehiculoRepository.remove(vehiculo);
    }
}
