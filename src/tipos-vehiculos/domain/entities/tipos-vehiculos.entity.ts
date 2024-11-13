import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { VehiculoEntity } from '../../../vehiculos/domain/entities/vehiculos.entity/vehiculos.entity';

@Entity('tipos_vehiculos')
export class TipoVehiculoEntity {
    @PrimaryGeneratedColumn()
    idTipoVehiculo: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    nombre: string;

    @OneToMany(() => VehiculoEntity, (vehiculo) => vehiculo.tipoVehiculo)
    vehiculos: VehiculoEntity[];
}
