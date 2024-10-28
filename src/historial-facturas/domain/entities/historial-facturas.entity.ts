import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ClienteEntity } from '../../../clientes/domain/entities/clientes.entity';
import { ReservaAlquilerEntity } from 'src/reserva-alquiler/domain/entities/reserva-alquiler.entity';

@Entity('historial_facturas')
export class HistorialFacturaEntity {
    @PrimaryGeneratedColumn()
    idFactura: number;

    @ManyToOne(() => ClienteEntity)
    @JoinColumn({ name: 'idCliente' })
    cliente: ClienteEntity;

    @ManyToOne(() => ReservaAlquilerEntity)
    @JoinColumn({ name: 'idAlquiler' })
    alquiler: ReservaAlquilerEntity;

    @Column({ type: 'timestamp' })
    fechaEmision: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    montoTotal: number;

    @Column({ type: 'enum', enum: ['Efectivo', 'Tarjeta', 'Transferencia'] })
    formaPago: string;

    @Column({ type: 'enum', enum: ['Pagado', 'Pendiente'] })
    estadoPago: string;
}
