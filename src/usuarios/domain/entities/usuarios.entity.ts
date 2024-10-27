import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity('usuarios')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @ManyToOne(() => PersonaEntity, (persona) => persona.usuarios)
    @JoinColumn({ name: 'idPersona' })
    persona: PersonaEntity;

    @Column({ type: 'varchar', length: 100 })
    password: string;

    @Column({ type: 'enum', enum: ['Administrador', 'Empleado', 'Cliente'] })
    rol: string;

    @Column({ type: 'enum', enum: ['Activo', 'Inactivo'] })
    estado: string;
}
