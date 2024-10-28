import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { DireccionEntity } from '../../../direcciones/domain/entities/direcciones.entity';
import { UsuarioEntity } from '../../../usuarios/domain/entities/usuarios.entity';

@Entity('personas')
export class PersonaEntity {
    @PrimaryGeneratedColumn()
    idPersona: number;

    @Column({ type: 'varchar', length: 10, unique: true })
    cedula: string;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'varchar', length: 100 })
    apellido: string;

    @Column({ type: 'enum', enum: ['Masculino', 'Femenino', 'Otro'] })
    genero: string;

    @Column({ type: 'date' })
    fechaNacimiento: Date;

    @Column({ type: 'varchar', length: 100 })
    telefono: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @ManyToOne(() => DireccionEntity, (direccion) => direccion.personas)
    @JoinColumn({ name: 'idDireccion' })
    direccion: DireccionEntity;

    @OneToMany(() => UsuarioEntity, (usuario) => usuario.persona)
    usuarios: UsuarioEntity[];
}
