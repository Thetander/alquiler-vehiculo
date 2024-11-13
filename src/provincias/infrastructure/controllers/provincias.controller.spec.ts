import { Test, TestingModule } from '@nestjs/testing';
import { ProvinciaController } from './provincias.controller';

describe('ProvinciasController', () => {
  let controller: ProvinciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvinciaController],
    }).compile();

    controller = module.get<ProvinciaController>(ProvinciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
