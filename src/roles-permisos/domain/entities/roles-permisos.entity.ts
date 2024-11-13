import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { RolEntity } from 'src/roles/domain/entities/roles.entity';
import { PermisoEntity } from 'src/permisos/domain/entities/permisos.entity';

@Entity('roles_permisos')
export class RolesPermisosEntity {
    @PrimaryColumn()
    idRol: number;

    @PrimaryColumn()
    idPermiso: number;

    @ManyToOne(() => RolEntity, (rol) => rol.rolesPermisos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idRol' })
    rol: RolEntity;

    @ManyToOne(() => PermisoEntity, (permiso) => permiso.rolesPermisos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idPermiso' })
    permiso: PermisoEntity;
}
