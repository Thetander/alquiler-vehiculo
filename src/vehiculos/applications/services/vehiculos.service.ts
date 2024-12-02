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
import { Logger } from '@nestjs/common';

@Injectable()
export class VehiculoService {
    private readonly logger = new Logger(VehiculoService.name);
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
        this.logger.debug('Datos recibidos en el DTO:', JSON.stringify(dto));

        // Verificar color
        const color = await this.vehiculoRepository.manager.findOne(ColorEntity, {
            where: { idColor: dto.idColor },
        });
        if (!color) {
            this.logger.error(`Color con id ${dto.idColor} no encontrado`);
            throw new NotFoundException(`Color con id ${dto.idColor} no encontrado`);
        }
        this.logger.debug(`Color validado: ${JSON.stringify(color)}`);

        // Verificar marca
        const marca = await this.vehiculoRepository.manager.findOne(MarcaEntity, {
            where: { idMarca: dto.idMarca },
        });
        if (!marca) {
            this.logger.error(`Marca con id ${dto.idMarca} no encontrada`);
            throw new NotFoundException(`Marca con id ${dto.idMarca} no encontrada`);
        }
        this.logger.debug(`Marca validada: ${JSON.stringify(marca)}`);

        // Verificar modelo
        const modelo = await this.vehiculoRepository.manager.findOne(ModeloEntity, {
            where: { idModelo: dto.idModelo },
        });
        if (!modelo) {
            this.logger.error(`Modelo con id ${dto.idModelo} no encontrado`);
            throw new NotFoundException(`Modelo con id ${dto.idModelo} no encontrado`);
        }
        this.logger.debug(`Modelo validado: ${JSON.stringify(modelo)}`);

        // Verificar tipo de vehículo
        const tipoVehiculo = await this.vehiculoRepository.manager.findOne(TipoVehiculoEntity, {
            where: { idTipoVehiculo: dto.idTipoVehiculo },
        });
        if (!tipoVehiculo) {
            this.logger.error(`Tipo de Vehículo con id ${dto.idTipoVehiculo} no encontrado`);
            throw new NotFoundException(`Tipo de Vehículo con id ${dto.idTipoVehiculo} no encontrado`);
        }
        this.logger.debug(`Tipo de Vehículo validado: ${JSON.stringify(tipoVehiculo)}`);

        // Crear entidad del vehículo
        const newVehiculo = this.vehiculoRepository.create({
            ...dto,
            color,
            marca,
            modelo,
            tipoVehiculo,
        });
        this.logger.debug('Vehículo a guardar:', JSON.stringify(newVehiculo));

        try {
            const savedVehiculo = await this.vehiculoRepository.save(newVehiculo);
            this.logger.debug('Vehículo guardado con éxito:', JSON.stringify(savedVehiculo));
            return savedVehiculo;
        } catch (error) {
            this.logger.error('Error al guardar el vehículo:', error.message, error.stack);
            throw error;
        }
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
