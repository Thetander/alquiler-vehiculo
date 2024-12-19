import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DevolucionEntity } from '../../domain/entities/devoluciones.entity';
import { CreateDevolucionDto } from '../dto/create-devoluciones.dto';
import { EditDevolucionDto } from '../dto/update-devoluciones.dto';

@Injectable()
export class DevolucionService {
  constructor(
    @InjectRepository(DevolucionEntity)
    private readonly devolucionRepository: Repository<DevolucionEntity>,
  ) {}

  async getMany(): Promise<DevolucionEntity[]> {
    return await this.devolucionRepository.find({
      relations: ['reservaAlquiler'], // Incluye la relación con reserva de alquiler
    });
  }

  async getOne(id: number): Promise<DevolucionEntity> {
    const devolucion = await this.devolucionRepository.findOne({
      where: { idDevolucion: id },
      relations: ['reservaAlquiler'],
    });
    if (!devolucion) throw new NotFoundException('Devolución no encontrada');
    return devolucion;
  }

  async createOne(dto: CreateDevolucionDto): Promise<DevolucionEntity> {
    const devolucion = this.devolucionRepository.create({
      ...dto,
      reservaAlquiler: { idAlquiler: dto.reservaAlquiler },
    });
    return await this.devolucionRepository.save(devolucion);
  }

  async editOne(id: number, dto: EditDevolucionDto): Promise<DevolucionEntity> {
    const devolucion = await this.getOne(id);
    const editedDevolucion = Object.assign(devolucion, {
      ...dto,
      reservaAlquiler: dto.reservaAlquiler
        ? { idAlquiler: dto.reservaAlquiler }
        : devolucion.reservaAlquiler,
    });
    return await this.devolucionRepository.save(editedDevolucion);
  }

  async deleteOne(id: number): Promise<void> {
    const devolucion = await this.getOne(id);
    await this.devolucionRepository.remove(devolucion);
  }
}
