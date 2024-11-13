import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolesPermisosDto } from 'src/roles-permisos/applications/dto/create-roles-permisos.dto';
import { EditRolesPermisosDto } from 'src/roles-permisos/applications/dto/update-roles-permisos.dto';
import { RolesPermisosEntity } from 'src/roles-permisos/domain/entities/roles-permisos.entity';

@Injectable()
export class RolesPermisosService {
    constructor(
        @InjectRepository(RolesPermisosEntity)
        private readonly rolesPermisosRepository: Repository<RolesPermisosEntity>,
    ) {}

    async getMany() {
        return await this.rolesPermisosRepository.find();
    }

    async getOne(idPermiso: number) {
        return await this.rolesPermisosRepository.findOne({ where: { idPermiso: idPermiso  } });
    }

    async createOne(dto: CreateRolesPermisosDto) {
        const newRolesPermisos = this.rolesPermisosRepository.create(dto);
        return await this.rolesPermisosRepository.save(newRolesPermisos);
    }

    async editOne(id: number, dto: EditRolesPermisosDto) {
        const rolesPermisos = await this.getOne(id);
        const editedRolesPermisos = Object.assign(rolesPermisos, dto);
        return await this.rolesPermisosRepository.save(editedRolesPermisos);
    }

    async deleteOne(id: number) {
        const rolesPermisos = await this.getOne(id);
        return await this.rolesPermisosRepository.remove(rolesPermisos);
    }
}
