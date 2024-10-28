import { ReservaAlquilerEntity } from 'src/reserva-alquiler/domain/entities/reserva-alquiler.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity('devoluciones')
export class DevolucionEntity {
    @PrimaryGeneratedColumn()
    idDevolucion: number;

    @ManyToOne(() => ReservaAlquilerEntity)
    @JoinColumn({ name: 'idReservaAlquiler' })
    reservaAlquiler: ReservaAlquilerEntity;

    @Column({ type: 'boolean' })
    anomalia: boolean;

    @Column({ type: 'text', nullable: true })
    descripcion: string;

    @Column({ type: 'timestamp' })
    fechaDevolucion: Date;
}
