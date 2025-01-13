import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CargoEntity } from '../../domain/entities/cargos.entity';
import { CreateCargoDto } from '../dto/create-cargos.dto';
import { UpdateCargoDto } from '../dto/update-cargos.dto';

@Injectable()
export class CargosService {
  constructor(
    @InjectRepository(CargoEntity)
    private readonly cargosRepository: Repository<CargoEntity>,
  ) {}

  async create(createCargoDto: CreateCargoDto): Promise<CargoEntity> {
    const newCargo = this.cargosRepository.create(createCargoDto);
    return await this.cargosRepository.save(newCargo);
  }

  async findAll(): Promise<CargoEntity[]> {
    return await this.cargosRepository.find();
  }

  async findOne(id: number): Promise<CargoEntity> {
    const cargo = await this.cargosRepository.findOne({ where: { idCargo: id } });
    if (!cargo) {
      throw new NotFoundException(`Cargo con ID ${id} no encontrado.`);
    }
    return cargo;
  }

  async update(id: number, updateCargoDto: UpdateCargoDto): Promise<CargoEntity> {
    const cargo = await this.findOne(id);
    Object.assign(cargo, updateCargoDto);
    return await this.cargosRepository.save(cargo);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cargosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cargo con ID ${id} no encontrado.`);
    }
  }
}
