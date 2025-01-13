import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from '../../domain/entities/transaccion.entity';

@Injectable()
export class TransaccionService {
  constructor(
    @InjectRepository(Transaccion)
    private readonly transaccionRepository: Repository<Transaccion>,
  ) {}

  /**
   * Crear una nueva transacción
   * @param data Datos de la transacción
   * @returns Transacción creada
   */
  async crearTransaccion(data: Partial<Transaccion>): Promise<Transaccion> {
    const transaccion = this.transaccionRepository.create(data);
    return await this.transaccionRepository.save(transaccion);
  }

  /**
   * Obtener una transacción por su ID de transacción
   * @param transactionId ID de la transacción
   * @returns Transacción encontrada
   */
  async obtenerTransaccionPorId(transactionId: string): Promise<Transaccion> {
    return await this.transaccionRepository.findOneBy({ transactionId });
  }

  /**
   * Obtener todas las transacciones
   * @returns Lista de transacciones
   */
  async obtenerTodasTransacciones(): Promise<Transaccion[]> {
    return await this.transaccionRepository.find();
  }

  /**
   * Obtener transacciones por ID de persona
   * @param idPersona ID de la persona asociada
   * @returns Lista de transacciones asociadas a la persona
   */
  async obtenerTransaccionesPorPersona(idPersona: number): Promise<Transaccion[]> {
    return await this.transaccionRepository.find({
      where: { idPersona },
    });
  }
}
