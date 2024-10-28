import { EstadoVehiculoEntity } from 'src/estados-vehiculos/domain/entities/estados-vehiculos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity('vehiculos')
export class VehiculoEntity {
    @PrimaryGeneratedColumn()
    idVehiculo: number;

    @Column({ type: 'varchar', length: 100, unique: true })
    matricula: string;

    @Column({ type: 'varchar', length: 100 })
    modelo: string;

    @Column({ type: 'varchar', length: 100 })
    marca: string;

    @Column({ type: 'varchar', length: 100 })
    color: string;

    @Column({ type: 'date' })
    fechaFabricacion: Date;

    @Column({ type: 'varchar', length: 100 })
    numMotor: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    numSerie: string;

    @Column({ type: 'boolean' })
    disponible: boolean;

    @Column({ type: 'boolean' })
    mantenimiento: boolean;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precioAlqDia: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    kilometraje: number;

    @Column({ type: 'enum', enum: ['SUV', 'Sedan', 'Camioneta'] })
    tipoVehiculo: string;

    @ManyToOne(() => EstadoVehiculoEntity)
    @JoinColumn({ name: 'idEstado' })
    estado: EstadoVehiculoEntity;
}
