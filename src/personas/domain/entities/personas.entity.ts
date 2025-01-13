import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { DireccionEntity } from 'src/direcciones/domain/entities/direcciones.entity';
import { UsuarioEntity } from 'src/usuarios/domain/entities/usuarios.entity';
import { EmpleadoEntity } from 'src/empleados/domain/entities/empleados.entity';
import { AdministradorEntity } from 'src/administradores/domain/entities/administradores.entity/administradores.entity';

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

  @ManyToOne(() => DireccionEntity, (direccion) => direccion.personas)
  @JoinColumn({ name: 'idDireccion' })
  direccion: DireccionEntity;

  @OneToMany(() => UsuarioEntity, (usuario) => usuario.persona)
  usuarios: UsuarioEntity[];

  @OneToMany(() => EmpleadoEntity, (empleado) => empleado.persona)
  empleados: EmpleadoEntity[];

  @OneToMany(() => AdministradorEntity, (administrador) => administrador.persona)
  administradores: AdministradorEntity[];
}
