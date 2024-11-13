import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RolesPermisosEntity } from 'src/roles-permisos/domain/entities/roles-permisos.entity';
import { MenuRolEntity } from 'src/menus-roles/domain/entities/menus-roles.entity';

@Entity('roles')
export class RolEntity {
    @PrimaryGeneratedColumn()
    idRol: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'text' })
    descripcion: string;

    @OneToMany(() => RolesPermisosEntity, (rolesPermisos) => rolesPermisos.rol)
    rolesPermisos: RolesPermisosEntity[];

    @OneToMany(() => MenuRolEntity, (menuRol) => menuRol.rol)
    menusRoles: MenuRolEntity[];
}

