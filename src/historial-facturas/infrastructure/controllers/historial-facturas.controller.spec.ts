import { Test, TestingModule } from '@nestjs/testing';
import { HistorialFacturasController } from './historial-facturas.controller';

describe('HistorialFacturasController', () => {
  let controller: HistorialFacturasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialFacturasController],
    }).compile();

    controller = module.get<HistorialFacturasController>(HistorialFacturasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
