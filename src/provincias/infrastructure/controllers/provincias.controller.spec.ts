import { Test, TestingModule } from '@nestjs/testing';
import { ProvinciasController } from './provincias.controller';

describe('ProvinciasController', () => {
  let controller: ProvinciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvinciasController],
    }).compile();

    controller = module.get<ProvinciasController>(ProvinciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
