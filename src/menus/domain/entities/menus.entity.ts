import { MenuRolEntity } from 'src/menus-roles/domain/entities/menus-roles.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('menus')
export class MenuEntity {
    @PrimaryGeneratedColumn()
    idMenu: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    ruta: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    icono: string;

    @Column({ type: 'int' })
    orden: number;

    @OneToMany(() => MenuRolEntity, (menuRol) => menuRol.menu)
    menusRoles: MenuRolEntity[];
}
