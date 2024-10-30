import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolEntity } from '../../../roles/domain/entities/roles.entity';
import { CreateRolDto } from '../dto/create-roles.dto';
import { EditRolDto } from '../dto/update-roles.dto';

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(RolEntity)
        private readonly rolRepository: Repository<RolEntity>,
    ) {}

    async getMany() {
        return await this.rolRepository.find({ relations: ['permisos', 'menus'] });
    }

    async getOne(idRol: number) {
        const rol = await this.rolRepository.findOne({
            where: { idRol },
            relations: ['permisos', 'menus'],
        });
        if (!rol) throw new NotFoundException('Rol not found');
        return rol;
    }

    async createOne(dto: CreateRolDto) {
        const newRol = this.rolRepository.create(dto);
        return await this.rolRepository.save(newRol);
    }

    async editOne(id: number, dto: EditRolDto) {
        const rol = await this.getOne(id);
        const editedRol = Object.assign(rol, dto);
        return await this.rolRepository.save(editedRol);
    }

    async deleteOne(id: number) {
        const rol = await this.getOne(id);
        return await this.rolRepository.remove(rol);
    }
}
