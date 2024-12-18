import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservaAlquilerEntity } from '../../domain/entities/reserva-alquiler.entity';
import { CreateReservaAlquilerDto } from '../dto/create-reserva-alquiler.dto';
import { EditReservaAlquilerDto } from '../dto/update-reserva-alquiler.dto';

@Injectable()
export class ReservaAlquilerService {
  constructor(
    @InjectRepository(ReservaAlquilerEntity)
    private readonly reservaAlquilerRepository: Repository<ReservaAlquilerEntity>,
  ) {}

  async getAll(): Promise<ReservaAlquilerEntity[]> {
    return await this.reservaAlquilerRepository.find({
      relations: ['empleado', 'cliente', 'vehiculo'],
    });
  }

  async getOne(id: number): Promise<ReservaAlquilerEntity> {
    const reserva = await this.reservaAlquilerRepository.findOne({
      where: { idAlquiler: id },
      relations: ['empleado', 'cliente', 'vehiculo'],
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return reserva;
  }

  async create(dto: CreateReservaAlquilerDto): Promise<ReservaAlquilerEntity> {
    const newReserva = this.reservaAlquilerRepository.create({
      empleado: { idEmpleado: dto.idEmpleadoAlq },
      cliente: { idCliente: dto.idClienteAlq },
      vehiculo: { idVehiculo: dto.idVehiculoAlq },
      fechaInicio: new Date(dto.fechaInicio),
      fechaFin: new Date(dto.fechaFin),
      estadoAlquiler: dto.estadoAlquiler,
      costoAdicionalAnomalias: dto.costoAdicionalAnomalias,
      montoTotal: dto.montoTotal,
    });
    return await this.reservaAlquilerRepository.save(newReserva);
  }

  async update(id: number, dto: EditReservaAlquilerDto): Promise<ReservaAlquilerEntity> {
    const reserva = await this.getOne(id);
    const updatedReserva = Object.assign(reserva, dto);
    return await this.reservaAlquilerRepository.save(updatedReserva);
  }

  async delete(id: number): Promise<ReservaAlquilerEntity> {
    const reserva = await this.getOne(id);
    return await this.reservaAlquilerRepository.remove(reserva);
  }
}
