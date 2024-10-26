import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cargos')
export class CargoEntity {
    @PrimaryGeneratedColumn()
    idCargo: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'text' })
    descripcion: string;
}
