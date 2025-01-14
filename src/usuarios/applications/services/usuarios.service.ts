import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/usuarios/domain/entities/usuarios.entity';
import { CreateUsuarioDto } from 'src/usuarios/applications/dto/create-usuarios.dto';
import {  UpdateUsuarioDto } from 'src/usuarios/applications/dto/update-usuarios.dto';
import { PersonaEntity } from 'src/personas/domain/entities/personas.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
    @InjectRepository(PersonaEntity)
    private readonly personaRepository: Repository<PersonaEntity>,
  ) {}

  async getMany() {
    return await this.usuarioRepository.find();
  }

  async getOne(idUsuario: number) {
    const usuario = await this.usuarioRepository.findOne({ where: { idUsuario }, relations: ['persona'],  });
    if (!usuario) throw new NotFoundException('Usuario not found');
    
    return usuario;
  }

  async findOneByEmail(email: string) {
    return await this.usuarioRepository.findOne({ where: { email }, select: ['idUsuario', 'email', 'password', 'rol'] });
  }

  async findOneById(idUsuario: number) {
    return await this.usuarioRepository.findOne({ where: { idUsuario } });
  }

  async createOne(dto: CreateUsuarioDto) {
    const persona = await this.personaRepository.findOne({
      where: { idPersona: dto.idPersona },
    });

    if (!persona) {
      throw new NotFoundException('Persona not found');
    }

    const newUsuario = this.usuarioRepository.create(dto);
    newUsuario.persona = persona;

    return await this.usuarioRepository.save(newUsuario);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.preload({
      idUsuario: id,
      ...updateUsuarioDto,
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return this.usuarioRepository.save(usuario);
  }
  

  async remove(id: number): Promise<void> {
    const usuario = await this.usuarioRepository.findOneBy({ idUsuario: id });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    await this.usuarioRepository.remove(usuario);
  }
  
  async updatePassword(idUsuario: number, newPassword: string): Promise<void> {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.usuarioRepository.update(idUsuario, { password: hashedPassword });
  }
}
