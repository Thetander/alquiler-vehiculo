import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TipoVehiculoEntity } from '../../../../tipos-vehiculos/domain/entities/tipos-vehiculos.entity';
import { ColorEntity } from 'color/domain/entities/colores.entity';
import { MarcaEntity } from 'marca/domain/entities/marca.entity';
import { ModeloEntity } from 'modelo/domain/entities/modelo.entity';

@Entity('vehiculos')
export class VehiculoEntity {
    @PrimaryGeneratedColumn()
    idVehiculo: number;

    @Column({ type: 'varchar', length: 100 })
    matricula: string;

    @ManyToOne(() => ColorEntity, { eager: true })
    @JoinColumn({ name: 'idColor' })
    color: ColorEntity;

    @ManyToOne(() => MarcaEntity, { eager: true })
    @JoinColumn({ name: 'idMarca' })
    marca: MarcaEntity;

    @ManyToOne(() => ModeloEntity, { eager: true })
    @JoinColumn({ name: 'idModelo' })
    modelo: ModeloEntity;

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
    
    @Column({ type: 'int' })
    capacidad: number;

    @Column({ type: 'int' })
    nroPuertas: number;

    @Column({ type: 'varchar', length: 20 })
    transmision: string; 

    @Column({ type: 'varchar', length: 255, nullable: true })
    imagen: string; 

}
