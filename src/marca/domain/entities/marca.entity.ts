import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('marcas')
export class MarcaEntity {
    @PrimaryGeneratedColumn()
    idMarca: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    nombre: string;
}
