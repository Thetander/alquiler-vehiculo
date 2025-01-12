import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';

@Entity('administradores')
export class AdministradorEntity {
  @PrimaryGeneratedColumn()
  idAdministrador: number;

  @ManyToOne(() => PersonaEntity)
  @JoinColumn({ name: 'idPersona' })
  persona: PersonaEntity;

  @Column({ type: 'varchar', length: 100, nullable: false })
  cargo: string;

  @Column({ type: 'enum', enum: ['Activo', 'Inactivo'], default: 'Activo' })
  estado: string;
}
