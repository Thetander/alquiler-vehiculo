import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MarcaEntity } from '../../../marca/domain/entities/marca.entity';

@Entity('modelos')
export class ModeloEntity {
    @PrimaryGeneratedColumn()
    idModelo: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @ManyToOne(() => MarcaEntity, { eager: true })
    @JoinColumn({ name: 'idMarca' })
    marca: MarcaEntity;
}
