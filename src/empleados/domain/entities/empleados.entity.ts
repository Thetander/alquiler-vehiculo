import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { CargoEntity } from '../../../cargos/domain/entities/cargos.entity';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';

@Entity('empleados')
export class EmpleadoEntity {
    @PrimaryGeneratedColumn()
    idEmpleado: number;

    @ManyToOne(() => PersonaEntity)
    @JoinColumn({ name: 'idPersona' })
    persona: PersonaEntity;

    @ManyToOne(() => CargoEntity)
    @JoinColumn({ name: 'idCargo' })
    cargo: CargoEntity;

    @Column({ type: 'date' })
    fechaContratacion: Date;
}
