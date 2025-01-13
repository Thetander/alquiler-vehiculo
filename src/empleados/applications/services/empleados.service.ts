import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoEntity } from '../../domain/entities/empleados.entity';
import { CreateEmpleadoDto } from '../../applications/dto/create-empleados.dto';
import { UpdateEmpleadoDto } from '../../applications/dto/update-empleados.dto';
import { PersonaEntity } from 'personas/domain/entities/personas.entity';
import { CargoEntity } from 'cargos/domain/entities/cargos.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private readonly empleadoRepository: Repository<EmpleadoEntity>,
    @InjectRepository(PersonaEntity)
    private readonly personaRepository: Repository<PersonaEntity>,
    @InjectRepository(CargoEntity)
    private readonly cargoRepository: Repository<CargoEntity>,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<EmpleadoEntity> {
    const { idPersona, idCargo, fechaContratacion } = createEmpleadoDto;
  
    const persona = await this.personaRepository.findOneBy({ idPersona });
    if (!persona) throw new NotFoundException('Persona no encontrada');
  
    const cargo = await this.cargoRepository.findOneBy({ idCargo });
    if (!cargo) throw new NotFoundException('Cargo no encontrado');
  
    const empleado = this.empleadoRepository.create({
      persona,
      cargo,
      fechaContratacion: new Date(fechaContratacion),
    });
  
    return this.empleadoRepository.save(empleado);
  }
  

  async findAll() {
    return this.empleadoRepository.find({ relations: ['persona', 'cargo'] });
  }

  async findOne(id: number) {
    const empleado = await this.empleadoRepository.findOne({
      where: { idEmpleado: id },
      relations: ['persona', 'cargo'],
    });
    if (!empleado) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado.`);
    }
    return empleado;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    const empleado = await this.empleadoRepository.preload({
      idEmpleado: id,
      ...updateEmpleadoDto,
    });
    if (!empleado) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado.`);
    }
    return this.empleadoRepository.save(empleado);
  }

  async remove(id: number) {
    const empleado = await this.findOne(id);
    return this.empleadoRepository.remove(empleado);
  }
}
