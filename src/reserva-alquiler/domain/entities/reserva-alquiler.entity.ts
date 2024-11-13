import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EmpleadoEntity } from 'src/empleados/domain/entities/empleados.entity';
import { ClienteEntity } from 'src/clientes/domain/entities/clientes.entity';
import { VehiculoEntity } from 'src/vehiculos/domain/entities/vehiculos.entity/vehiculos.entity';


@Entity('reserva_alquiler')
export class ReservaAlquilerEntity {
    @PrimaryGeneratedColumn()
    idAlquiler: number;

    @ManyToOne(() => EmpleadoEntity)
    @JoinColumn({ name: 'idEmpleadoAlq' })
    empleado: EmpleadoEntity;

    @ManyToOne(() => ClienteEntity)
    @JoinColumn({ name: 'idClienteAlq' })
    cliente: ClienteEntity;

    @ManyToOne(() => VehiculoEntity)
    @JoinColumn({ name: 'idVehiculoAlq' })
    vehiculo: VehiculoEntity;

    @Column({ type: 'timestamp' })
    fechaInicio: Date;

    @Column({ type: 'timestamp' })
    fechaFin: Date;

    @Column({ type: 'enum', enum: ['Reservado', 'En curso', 'Finalizado', 'Cancelado'] })
    estadoAlquiler: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    costoAdicionalAnomalias: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    montoTotal: number;
}
