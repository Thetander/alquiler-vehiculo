import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { RolEntity } from 'src/roles/domain/entities/roles.entity';
import { MenuEntity } from 'src/menus/domain/entities/menus.entity';

@Entity('menus_roles')
export class MenuRolEntity {
    @PrimaryColumn()
    idRol: number;

    @PrimaryColumn()
    idMenu: number;

    @ManyToOne(() => RolEntity, (rol) => rol.menusRoles, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idRol' })
    rol: RolEntity;

    @ManyToOne(() => MenuEntity, (menu) => menu.menusRoles, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idMenu' })
    menu: MenuEntity;
}
