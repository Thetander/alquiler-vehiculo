import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { CiudadEntity } from 'src/ciudades/domain/entities/ciudades.entity';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';


@Entity('direcciones')
export class DireccionEntity {
    @PrimaryGeneratedColumn()
    idDireccion: number;

    @Column({ type: 'varchar', length: 100 })
    barrio: string;

    @Column({ type: 'varchar', length: 100 })
    callePrincipal: string;

    @Column({ type: 'varchar', length: 100 })
    calleSecundaria: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    referencia: string;

    @ManyToOne(() => CiudadEntity, (ciudad) => ciudad.direcciones)
    @JoinColumn({ name: 'idCiudad' })
    ciudad: CiudadEntity;

    @OneToMany(() => PersonaEntity, (persona) => persona.direccion)
    personas: PersonaEntity[];
}
