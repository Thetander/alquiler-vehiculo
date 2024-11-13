// import { Test, TestingModule } from '@nestjs/testing';
// import { CiudadService } from './ciudades.service';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CiudadEntity } from '../../domain/entities/ciudades.entity';
// import { Repository } from 'typeorm';
// import { NotFoundException } from '@nestjs/common';
// import { CreateCiudadDto } from '../dto/create-ciudades.dto';
// import { EditCiudadDto } from '../dto/update-ciudades.dto';

// describe('CiudadService', () => {
//   let service: CiudadService;
//   let ciudadRepository: Repository<CiudadEntity>;

//   // Mock inicial para el repositorio de ciudades
//   const mockCiudadRepository = {
//     find: jest.fn(),
//     findOne: jest.fn(),
//     create: jest.fn(),
//     save: jest.fn(),
//     remove: jest.fn(),
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         CiudadService,
//         {
//           provide: getRepositoryToken(CiudadEntity),
//           useValue: mockCiudadRepository,
//         },
//       ],
//     }).compile();

//     service = module.get<CiudadService>(CiudadService);
//     ciudadRepository = module.get<Repository<CiudadEntity>>(getRepositoryToken(CiudadEntity));
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   it('should return an array of cities', async () => {
//     const cities = [{ idCiudad: 1, nombre: 'Quito' }];
//     jest.spyOn(ciudadRepository, 'find').mockResolvedValue(cities as CiudadEntity[]);

//     const result = await service.getMany();
//     expect(result).toEqual(cities);
//   });

//   // Prueba para getOne
//   it('should return a city by ID', async () => {
//     const city = { idCiudad: 1, nombre: 'Quito' };
//     jest.spyOn(ciudadRepository, 'findOne').mockResolvedValue(city as CiudadEntity);

//     const result = await service.getOne(1);
//     expect(result).toEqual(city);
//   });

//   it('should throw NotFoundException if city not found', async () => {
//     jest.spyOn(ciudadRepository, 'findOne').mockResolvedValue(null);

//     await expect(service.getOne(1)).rejects.toThrow(NotFoundException);
//   });

//   it('should create and return a new city', async () => {
//     const dto: CreateCiudadDto = { nombre: 'Guayaquil', idProvincia: 1 };
//     const newCity = { idCiudad: 2, ...dto };

//     jest.spyOn(ciudadRepository, 'create').mockReturnValue(newCity as CiudadEntity);
//     jest.spyOn(ciudadRepository, 'save').mockResolvedValue(newCity as CiudadEntity);

//     const result = await service.createOne(dto);
//     expect(result).toEqual(newCity);
//   });

//   it('should edit and return an updated city', async () => {
//     const dto: EditCiudadDto = { nombre: 'Cuenca' };
//     const city = { idCiudad: 1, nombre: 'Quito', idProvincia: 1 };
//     const updatedCity = { ...city, ...dto };

//     jest.spyOn(service, 'getOne').mockResolvedValue(city as CiudadEntity);
//     jest.spyOn(ciudadRepository, 'save').mockResolvedValue(updatedCity as CiudadEntity);

//     const result = await service.editOne(1, dto);
//     expect(result).toEqual(updatedCity);
//   });

//   it('should throw NotFoundException if city to edit is not found', async () => {
//     const dto: EditCiudadDto = { nombre: 'Loja' };
//     jest.spyOn(service, 'getOne').mockRejectedValue(new NotFoundException('Ciudad not found'));

//     await expect(service.editOne(1, dto)).rejects.toThrow(NotFoundException);
//   });

//   // Prueba para deleteOne
//   it('should delete a city by ID', async () => {
//     const city = { idCiudad: 1, nombre: 'Quito' };
//     jest.spyOn(service, 'getOne').mockResolvedValue(city as CiudadEntity);
//     jest.spyOn(ciudadRepository, 'remove').mockResolvedValue(city as CiudadEntity);

//     const result = await service.deleteOne(1);
//     expect(result).toEqual(city);
//   });

//   it('should throw NotFoundException if city to delete is not found', async () => {
//     jest.spyOn(service, 'getOne').mockRejectedValue(new NotFoundException('Ciudad not found'));

//     await expect(service.deleteOne(1)).rejects.toThrow(NotFoundException);
//   });
// });

