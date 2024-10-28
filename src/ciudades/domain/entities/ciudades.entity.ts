import { DireccionEntity } from 'src/direcciones/domain/entities/direcciones.entity';
import { ProvinciaEntity } from 'src/provincias/domain/entities/provincias.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';


@Entity('ciudades')
export class CiudadEntity {
    @PrimaryGeneratedColumn()
    idCiudad: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @ManyToOne(() => ProvinciaEntity, (provincia) => provincia.ciudades)
    @JoinColumn({ name: 'idProvincia' })
    provincia: ProvinciaEntity;

    @OneToMany(() => DireccionEntity, (direccion) => direccion.ciudad)
    direcciones: DireccionEntity[];
}
