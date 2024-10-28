import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('estados_vehiculos')
export class EstadoVehiculoEntity {
    @PrimaryGeneratedColumn()
    idEstado: number;

    @Column({ type: 'varchar', length: 100 })
    descripcion: string;
}
