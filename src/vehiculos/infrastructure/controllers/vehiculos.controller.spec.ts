// import { Test, TestingModule } from '@nestjs/testing';
// import { VehiculoController } from '../controllers/vehiculos.controller';
// import { VehiculoService } from 'src/vehiculos/applications/services/vehiculos.service';
// import { CreateVehiculoDto } from 'src/vehiculos/applications/dto/create-vehiculos.dto';
// import { EditVehiculoDto } from 'src/vehiculos/applications/dto/update-vehiculos.dto';
// import { TipoVehiculo } from 'src/vehiculos/applications/dto/create-vehiculos.dto';

// describe('VehiculoController', () => {
//   let controller: VehiculoController;
//   let service: VehiculoService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [VehiculoController],
//       providers: [
//         {
//           provide: VehiculoService,
//           useValue: {
//             getMany: jest.fn(),
//             getOne: jest.fn(),
//             createOne: jest.fn(),
//             editOne: jest.fn(),
//             deleteOne: jest.fn(),
//           },
//         },
//       ],
//     }).compile();

//     controller = module.get<VehiculoController>(VehiculoController);
//     service = module.get<VehiculoService>(VehiculoService);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   describe('createOne', () => {
//     it('should create a new vehiculo', async () => {
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

//       const result = { id: 1, ...createVehiculoDto };

//       jest.spyOn(service, 'createOne').mockResolvedValue(result);

//       expect(await controller.createOne(createVehiculoDto)).toEqual({
//         message: 'Vehiculo created',
//         data: result,
//       });
//       expect(service.createOne).toHaveBeenCalledWith(createVehiculoDto);
//     });
//   });

//   describe('editOne', () => {
//     it('should update an existing vehiculo', async () => {
//       const editVehiculoDto: EditVehiculoDto = {
//         modelo: 'Model S',
//       };
//       const id = 1;
//       const result = { id, ...editVehiculoDto };

//       jest.spyOn(service, 'editOne').mockResolvedValue(result);

//       expect(await controller.editOne(id, editVehiculoDto)).toEqual({
//         message: 'Vehiculo updated',
//         data: result,
//       });
//       expect(service.editOne).toHaveBeenCalledWith(id, editVehiculoDto);
//     });
//   });
// });
