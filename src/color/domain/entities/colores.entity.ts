import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('colores')
export class ColorEntity {
    @PrimaryGeneratedColumn()
    idColor: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    nombre: string;
}
