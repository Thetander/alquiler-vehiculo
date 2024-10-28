import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RolesPermisosEntity } from '../../../roles-permisos/domain/entities/roles-permisos.entity';

@Entity('permisos')
export class PermisoEntity {
    @PrimaryGeneratedColumn()
    idPermiso: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'text' })
    descripcion: string;

    @OneToMany(() => RolesPermisosEntity, (rolesPermisos) => rolesPermisos.permiso)
    rolesPermisos: RolesPermisosEntity[];
}
