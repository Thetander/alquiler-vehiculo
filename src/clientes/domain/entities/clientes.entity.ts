import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';

@Entity('clientes')
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    idCliente: number;
    @ManyToOne(() => PersonaEntity)
    @JoinColumn({ name: 'idPersona' })
    persona: PersonaEntity;
}
