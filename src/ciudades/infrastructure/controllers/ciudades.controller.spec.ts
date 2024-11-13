import { Test, TestingModule } from '@nestjs/testing';
import { CiudadController } from './ciudades.controller';

describe('CiudadesController', () => {
  let controller: CiudadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CiudadController],
    }).compile();

    controller = module.get<CiudadController>(CiudadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
