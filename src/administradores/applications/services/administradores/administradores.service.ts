import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdministradorEntity } from '../../../domain/entities/administradores.entity/administradores.entity';
import { CreateAdministradorDto } from '../../dto/create-administrador.dto/create-administrador.dto';
import { UpdateAdministradorDto } from '../../dto/update-administrador.dto/update-administrador.dto';

@Injectable()
export class AdministradoresService {
  constructor(
    @InjectRepository(AdministradorEntity)
    private readonly administradorRepository: Repository<AdministradorEntity>,
  ) {}

  async create(dto: CreateAdministradorDto): Promise<AdministradorEntity> {
    const administrador = this.administradorRepository.create(dto);
    return await this.administradorRepository.save(administrador);
  }

  async update(id: number, dto: UpdateAdministradorDto): Promise<AdministradorEntity> {
    await this.administradorRepository.update(id, dto);
    return await this.administradorRepository.findOne({ where: { idAdministrador: id } });
  }

  async delete(id: number): Promise<void> {
    await this.administradorRepository.delete(id);
  }
}
