import { Test, TestingModule } from '@nestjs/testing';
import { EstadosVehiculosController } from './estados-vehiculos.controller';

describe('EstadosVehiculosController', () => {
  let controller: EstadosVehiculosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadosVehiculosController],
    }).compile();

    controller = module.get<EstadosVehiculosController>(EstadosVehiculosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
