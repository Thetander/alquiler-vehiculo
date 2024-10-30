import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../../../usuarios/domain/entities/usuarios.entity';
import { CreateUsuarioDto } from '../dto/create-usuarios.dto';
import { EditUsuarioDto } from '../dto/update-usuarios.dto';


export interface UsuarioFindOne {
    idUsuario?: number;
    email?: string;
}

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
    ) {}

    async getMany() {
        return await this.usuarioRepository.find();
    }

    async getOne(idUsuario: number) {
        const usuario = await this.usuarioRepository.findOne({ where: { idUsuario } });
        if (!usuario) throw new NotFoundException('Usuario not found');
        return usuario;
    }


    async createOne(dto: CreateUsuarioDto) {
        const newUsuario = this.usuarioRepository.create(dto);
        return await this.usuarioRepository.save(newUsuario);
    }

    async editOne(id: number, dto: EditUsuarioDto) {
        const usuario = await this.getOne(id);
        const editedUsuario = Object.assign(usuario, dto);
        return await this.usuarioRepository.save(editedUsuario);
    }

    async deleteOne(id: number) {
        const usuario = await this.getOne(id);
        return await this.usuarioRepository.remove(usuario);
    }
    async findOne(data: UsuarioFindOne){

        return await this.usuarioRepository
        .createQueryBuilder('UsuarioEntity')
        .where(data)
        .addSelect('UsuarioEntity.password')
        .getOne()
      }
}
