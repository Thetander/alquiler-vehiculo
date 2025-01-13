import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdministradorEntity } from '../../../domain/entities/administradores.entity/administradores.entity';
import { CreateAdministradorDto } from '../../dto/create-administrador.dto/create-administrador.dto';
import { UpdateAdministradorDto } from '../../dto/update-administrador.dto/update-administrador.dto';
import { PersonaEntity } from 'personas/domain/entities/personas.entity';
import { CargoEntity } from 'cargos/domain/entities/cargos.entity';

@Injectable()
export class AdministradoresService {
  constructor(
    @InjectRepository(AdministradorEntity)
    private readonly administradorRepository: Repository<AdministradorEntity>,
    @InjectRepository(PersonaEntity)
    private readonly personaRepository: Repository<PersonaEntity>,
    @InjectRepository(CargoEntity)
    private readonly cargoRepository: Repository<CargoEntity>,
  ) {}

  // Crear un nuevo administrador
  async create(createAdministradorDto: CreateAdministradorDto): Promise<AdministradorEntity> {
    const { idPersona, idCargo, estado, fechaRegistro } = createAdministradorDto;

    const persona = await this.personaRepository.findOneBy({ idPersona });
    if (!persona) throw new NotFoundException('Persona no encontrada');

    const cargo = await this.cargoRepository.findOneBy({ idCargo });
    if (!cargo) throw new NotFoundException('Cargo no encontrado');

    const administrador = this.administradorRepository.create({
      persona,
      cargo,
      estado,
      fechaRegistro: new Date(fechaRegistro),
    });

    return this.administradorRepository.save(administrador);
  }

  // Obtener todos los administradores
  async findAll(): Promise<AdministradorEntity[]> {
    return this.administradorRepository.find({ relations: ['persona', 'cargo'] });
  }

  // Obtener un administrador por su ID
  async findOne(id: number): Promise<AdministradorEntity> {
    const administrador = await this.administradorRepository.findOne({
      where: { idAdministrador: id },
      relations: ['persona', 'cargo'],
    });

    if (!administrador) {
      throw new NotFoundException(`Administrador con id ${id} no encontrado.`);
    }
    return administrador;
  }

  // Actualizar un administrador existente
  async update(id: number, updateAdministradorDto: UpdateAdministradorDto): Promise<AdministradorEntity> {
    const { idPersona, idCargo, estado } = updateAdministradorDto;
  
    const persona = idPersona
      ? await this.personaRepository.findOne({ where: { idPersona } })
      : undefined;
  
    const cargo = idCargo
      ? await this.cargoRepository.findOne({ where: { idCargo } })
      : undefined;
  
    const administrador = await this.administradorRepository.preload({
      idAdministrador: id,
      persona,
      cargo,
      estado,
    });
  
    if (!administrador) {
      throw new NotFoundException(`Administrador con id ${id} no encontrado.`);
    }
  
    return this.administradorRepository.save(administrador);
  }
  

  // Eliminar un administrador
  async remove(id: number): Promise<void> {
    const administrador = await this.findOne(id);
    if (!administrador) {
      throw new NotFoundException(`Administrador con id ${id} no encontrado.`);
    }
    await this.administradorRepository.remove(administrador);
  }
  
}
