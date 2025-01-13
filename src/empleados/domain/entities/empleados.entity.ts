import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';
import { CargoEntity } from 'src/cargos/domain/entities/cargos.entity';

@Entity('empleados')
export class EmpleadoEntity {
  @PrimaryGeneratedColumn()
  idEmpleado: number;

  @ManyToOne(() => PersonaEntity, { eager: true })
  @JoinColumn({ name: 'idPersona' })
  persona: PersonaEntity;

  @ManyToOne(() => CargoEntity, { eager: true })
  @JoinColumn({ name: 'idCargo' })
  cargo: CargoEntity;

  @Column({ type: 'date' })
  fechaContratacion: Date;
}
