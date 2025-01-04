import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservaAlquilerEntity } from '../../domain/entities/reserva-alquiler.entity';
import { CreateReservaAlquilerDto } from '../dto/create-reserva-alquiler.dto';
import { EditReservaAlquilerDto } from '../dto/update-reserva-alquiler.dto';
import { VehiculoEntity } from 'vehiculos/domain/entities/vehiculos.entity/vehiculos.entity';

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
    // Validar fechas
    const fechaInicio = new Date(dto.fechaInicio);
    const fechaFin = new Date(dto.fechaFin);
  
    if (!dto.fechaInicio || !dto.fechaFin) {
      throw new Error('Las fechas de inicio y fin son obligatorias.');
    }
  
    if (fechaFin <= fechaInicio) {
      throw new Error('La fecha de fin debe ser posterior a la fecha de inicio.');
    }
  
    // Obtener el vehículo
    const vehiculo = await this.reservaAlquilerRepository.manager.findOne(VehiculoEntity, {
      where: { idVehiculo: dto.idVehiculoAlq },
    });
  
    if (!vehiculo) {
      throw new Error('Vehículo no encontrado.');
    }
  
    if (!vehiculo.disponible) {
      throw new Error('El vehículo no está disponible para alquiler.');
    }
  
    const precioAlqDia = vehiculo.precioAlqDia;
  
    // Calcular la cantidad de días
    const msPorDia = 1000 * 60 * 60 * 24;
    const duracionMs = fechaFin.getTime() - fechaInicio.getTime();
    const dias = Math.ceil(duracionMs / msPorDia); // Siempre redondea hacia arriba
  
    // Calcular el monto total
    const montoTotal = dias * precioAlqDia;
  
    // Crear la reserva
    const newReserva = this.reservaAlquilerRepository.create({
      empleado: { idEmpleado: dto.idEmpleadoAlq },
      cliente: { idCliente: dto.idClienteAlq },
      vehiculo: { idVehiculo: dto.idVehiculoAlq },
      fechaInicio,
      fechaFin,
      estadoAlquiler: dto.estadoAlquiler,
      costoAdicionalAnomalias: dto.costoAdicionalAnomalias || 0,
      montoTotal,
      tipoPago: dto.tipoPago,
    });
  
    return await this.reservaAlquilerRepository.save(newReserva);
  }
  

  async actualizarCostoAdicional(idReserva: number, costoAdicional: number): Promise<ReservaAlquilerEntity> {
    const reserva = await this.getOne(idReserva);
    if (!reserva) {
      throw new Error('Reserva no encontrada.');
    }
  
    reserva.costoAdicionalAnomalias = costoAdicional;
    reserva.montoTotal += costoAdicional;
  
    return await this.reservaAlquilerRepository.save(reserva);
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
