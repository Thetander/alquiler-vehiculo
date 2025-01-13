import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';
import { CargoEntity } from 'src/cargos/domain/entities/cargos.entity';

@Entity('administradores')
export class AdministradorEntity {
  @PrimaryGeneratedColumn()
  idAdministrador: number;

  @ManyToOne(() => PersonaEntity)
  @JoinColumn({ name: 'idPersona' })
  persona: PersonaEntity;

  @ManyToOne(() => CargoEntity)
  @JoinColumn({ name: 'idCargo' })
  cargo: CargoEntity;

  @Column({ type: 'enum', enum: ['Activo', 'Inactivo'], default: 'Activo' })
  estado: string;

  @Column({ type: 'date'})
  fechaRegistro: Date;
}
