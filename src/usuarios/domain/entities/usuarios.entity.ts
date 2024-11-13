import { hash } from 'bcryptjs';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';


@Entity('usuarios')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @ManyToOne(() => PersonaEntity, (persona) => persona.usuarios)
    @JoinColumn({ name: 'idPersona' })
    persona: PersonaEntity;

    @Column({ type: 'varchar', length: 100 , nullable: false })
    password: string;

    @Column({type: 'varchar', length:100 , nullable:false})
    email:string;

    @Column({ type: 'enum', enum: ['Administrador', 'Empleado', 'Cliente'] })
    rol: string;

    @Column({ type: 'enum', enum: ['Activo', 'Inactivo'] })
    estado: string;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (!this.password) {
            return;
        }
        this.password = await hash(this.password, 10);
    }

}
