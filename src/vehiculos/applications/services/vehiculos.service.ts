import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { VehiculoEntity } from 'src/vehiculos/domain/entities/vehiculos.entity/vehiculos.entity';
import { CreateVehiculoDto } from '../dto/create-vehiculos.dto';
import { EditVehiculoDto } from '../dto/update-vehiculos.dto';
import { ColorEntity } from 'color/domain/entities/colores.entity';
import { MarcaEntity } from 'marca/domain/entities/marca.entity';
import { ModeloEntity } from 'modelo/domain/entities/modelo.entity';
import { TipoVehiculoEntity } from 'tipos-vehiculos/domain/entities/tipos-vehiculos.entity';

@Injectable()
export class VehiculoService {
    constructor(
        @InjectRepository(VehiculoEntity)
        private readonly vehiculoRepository: Repository<VehiculoEntity>,
    ) {}

    async getMany(filters?: any) {
        const queryOptions: any = {
            relations: ['marca', 'modelo', 'color', 'tipoVehiculo'],
        };
    
        if (filters) {
            queryOptions.where = {};
            if (filters.marca) {
                queryOptions.where.marca = { idMarca: filters.marca };
            }
            if (filters.modelo) {
                queryOptions.where.modelo = { idModelo: filters.modelo };
            }
            if (filters.color) {
                queryOptions.where.color = { idColor: filters.color };
            }
            if (filters.tipoVehiculo) {
                queryOptions.where.tipoVehiculo = { idTipoVehiculo: filters.tipoVehiculo };
            }
        }
    
        return await this.vehiculoRepository.find(queryOptions);
    }
    
    async getFiltered(filter: number) {
        return await this.vehiculoRepository.find({ where: { tipoVehiculo: { idTipoVehiculo: filter } } });
    }

    async getOne(idVehiculo: number) {
        const vehiculo = await this.vehiculoRepository.findOne({ where: { idVehiculo } });
        if (!vehiculo) throw new NotFoundException('Vehiculo not found');
        return vehiculo;
    }

    async createOne(dto: CreateVehiculoDto) {
        const color = await this.vehiculoRepository.manager.findOne(ColorEntity, { where: { idColor: dto.idColor } });
        if (!color) {
            throw new NotFoundException(`Color con id ${dto.idColor} no encontrado`);
        }
    
        const marca = await this.vehiculoRepository.manager.findOne(MarcaEntity, { where: { idMarca: dto.idMarca } });
        if (!marca) {
            throw new NotFoundException(`Marca con id ${dto.idMarca} no encontrada`);
        }
    
        const modelo = await this.vehiculoRepository.manager.findOne(ModeloEntity, { where: { idModelo: dto.idModelo } });
        if (!modelo) {
            throw new NotFoundException(`Modelo con id ${dto.idModelo} no encontrado`);
        }
    
        const tipoVehiculo = await this.vehiculoRepository.manager.findOne(TipoVehiculoEntity, { where: { idTipoVehiculo: dto.idTipoVehiculo } });
        if (!tipoVehiculo) {
            throw new NotFoundException(`Tipo de Vehículo con id ${dto.idTipoVehiculo} no encontrado`);
        }
    
        const newVehiculo = this.vehiculoRepository.create({
            ...dto,
            color,
            marca,
            modelo,
            tipoVehiculo,
        });
    
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
