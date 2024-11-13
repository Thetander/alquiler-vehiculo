import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoVehiculoEntity } from '../../domain/entities/tipos-vehiculos.entity';
import { CreateTipoVehiculoDto } from '../dto/create-tipo-vehiculo.dto';
import { EditTipoVehiculoDto } from '../dto/update-tipo-vehiculo.dto';

@Injectable()
export class TipoVehiculoService {
    constructor(
        @InjectRepository(TipoVehiculoEntity)
        private readonly tipoVehiculoRepository: Repository<TipoVehiculoEntity>,
    ) {}

    async getMany() {
        return await this.tipoVehiculoRepository.find();
    }

    async getOne(idTipoVehiculo: number) {
        const tipoVehiculo = await this.tipoVehiculoRepository.findOne({ where: { idTipoVehiculo } });
        if (!tipoVehiculo) throw new NotFoundException('Tipo de Vehiculo not found');
        return tipoVehiculo;
    }

    async createOne(dto: CreateTipoVehiculoDto) {
        const tipoVehiculo = this.tipoVehiculoRepository.create(dto);
        return await this.tipoVehiculoRepository.save(tipoVehiculo);
    }

    async editOne(idTipoVehiculo: number, dto: EditTipoVehiculoDto) {
        const tipoVehiculo = await this.getOne(idTipoVehiculo);
        const editedTipoVehiculo = Object.assign(tipoVehiculo, dto);
        return await this.tipoVehiculoRepository.save(editedTipoVehiculo);
    }

    async deleteOne(idTipoVehiculo: number) {
        const tipoVehiculo = await this.getOne(idTipoVehiculo);
        return await this.tipoVehiculoRepository.remove(tipoVehiculo);
    }
}
