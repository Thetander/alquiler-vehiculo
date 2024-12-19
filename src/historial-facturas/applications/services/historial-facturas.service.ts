import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialFacturaEntity } from '../../domain/entities/historial-facturas.entity';
import { CreateHistorialFacturaDto } from '../dto/create-historial-facturas.dto';
import { EditHistorialFacturaDto } from '../dto/update-historial-facturas.dto';

@Injectable()
export class HistorialFacturaService {
  constructor(
    @InjectRepository(HistorialFacturaEntity)
    private readonly historialFacturaRepository: Repository<HistorialFacturaEntity>,
  ) {}

  async getAll(): Promise<HistorialFacturaEntity[]> {
    return await this.historialFacturaRepository.find({
      relations: ['cliente', 'alquiler'],
    });
  }

  async getOne(id: number): Promise<HistorialFacturaEntity> {
    const factura = await this.historialFacturaRepository.findOne({
      where: { idFactura: id },
      relations: ['cliente', 'alquiler'],
    });
    if (!factura) throw new NotFoundException('Factura no encontrada');
    return factura;
  }

  async create(dto: CreateHistorialFacturaDto): Promise<HistorialFacturaEntity> {
    const newFactura = this.historialFacturaRepository.create({
      cliente: { idCliente: dto.idCliente },
      alquiler: { idAlquiler: dto.idAlquiler },
      fechaEmision: new Date(dto.fechaEmision),
      montoTotal: dto.montoTotal,
      formaPago: dto.formaPago,
      estadoPago: dto.estadoPago,
    });
    return await this.historialFacturaRepository.save(newFactura);
  }

  async update(id: number, dto: EditHistorialFacturaDto): Promise<HistorialFacturaEntity> {
    const factura = await this.getOne(id);
    const updatedFactura = Object.assign(factura, dto);
    return await this.historialFacturaRepository.save(updatedFactura);
  }

  async delete(id: number): Promise<HistorialFacturaEntity> {
    const factura = await this.getOne(id);
    return await this.historialFacturaRepository.remove(factura);
  }
}
