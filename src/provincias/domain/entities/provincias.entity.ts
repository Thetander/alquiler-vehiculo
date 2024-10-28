import { CiudadEntity } from 'src/ciudades/domain/entities/ciudades.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('provincias')
export class ProvinciaEntity {
    @PrimaryGeneratedColumn()
    idProvincia: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @OneToMany(() => CiudadEntity, (ciudad) => ciudad.provincia)
    ciudades: CiudadEntity[];
}
