// import { Test, TestingModule } from '@nestjs/testing';
// import { VehiculoService } from 'src/vehiculos/applications/services/vehiculos.service';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { VehiculoEntity } from 'src/vehiculos/domain/entities/vehiculos.entity/vehiculos.entity';
// import { Repository } from 'typeorm';
// import { CreateVehiculoDto, TipoVehiculo } from 'src/vehiculos/applications/dto/create-vehiculos.dto';
// import { EditVehiculoDto } from 'src/vehiculos/applications/dto/update-vehiculos.dto';

// describe('VehiculoService', () => {
//   let service: VehiculoService;
//   let repository: Repository<VehiculoEntity>;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         VehiculoService,
//         {
//           provide: getRepositoryToken(VehiculoEntity),
//           useClass: Repository,
//         },
//       ],
//     }).compile();

//     service = module.get<VehiculoService>(VehiculoService);
//     repository = module.get<Repository<VehiculoEntity>>(getRepositoryToken(VehiculoEntity));
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   describe('createOne', () => {
//     it('should create and save a new vehiculo', async () => {
//       const createVehiculoDto: CreateVehiculoDto = {
//         matricula: 'ABC-1234',
//         modelo: 'Model X',
//         marca: 'Tesla',
//         color: 'Red',
//         fechaFabricacion: '2023-01-01',
//         numMotor: '123456789',
//         numSerie: '987654321',
//         disponible: true,
//         mantenimiento: false,
//         precioAlqDia: 100,
//         kilometraje: 2000,
//         tipoVehiculo: TipoVehiculo.SUV,
//         idEstado: 1,
//       };

//       const savedVehiculo = { idVehiculo: 1, ...createVehiculoDto };

//       jest.spyOn(repository, 'create').mockReturnValue(savedVehiculo as any);
//       jest.spyOn(repository, 'save').mockResolvedValue(savedVehiculo);

//       expect(await service.createOne(createVehiculoDto)).toEqual(savedVehiculo);
//       expect(repository.create).toHaveBeenCalledWith(createVehiculoDto);
//       expect(repository.save).toHaveBeenCalledWith(savedVehiculo);
//     });
//   });

//   describe('editOne', () => {
//     it('should update an existing vehiculo', async () => {
//       const editVehiculoDto: EditVehiculoDto = { modelo: 'Model S' };
//       const id = 1;
//       const existingVehiculo = { idVehiculo: id, ...editVehiculoDto };

//       jest.spyOn(service, 'getOne').mockResolvedValue(existingVehiculo);
//       jest.spyOn(repository, 'save').mockResolvedValue(existingVehiculo);

//       expect(await service.editOne(id, editVehiculoDto)).toEqual(existingVehiculo);
//       expect(repository.save).toHaveBeenCalledWith(existingVehiculo);
//     });
//   });
// });
