// vehiculos.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TipoVehiculoEntity } from '../../../../tipos-vehiculos/domain/entities/tipos-vehiculos.entity';

@Entity('vehiculos')
export class VehiculoEntity {
    @PrimaryGeneratedColumn()
    idVehiculo: number;

    @Column({ type: 'varchar', length: 100 })
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

    @Column({ type: 'varchar', length: 100 })
    numSerie: string;

    @Column({ type: 'boolean' })
    disponible: boolean;

    @Column({ type: 'boolean' })
    mantenimiento: boolean;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    precioAlqDia: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    kilometraje: number;

    @ManyToOne(() => TipoVehiculoEntity, { eager: true })
    @JoinColumn({ name: 'idTipoVehiculo' })
    tipoVehiculo: TipoVehiculoEntity;

    @Column()
    idEstado: number;
}
