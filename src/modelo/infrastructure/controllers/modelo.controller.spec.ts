import { Test, TestingModule } from '@nestjs/testing';
import { ModeloController } from './modelo.controller';

describe('ModeloController', () => {
  let controller: ModeloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModeloController],
    }).compile();

    controller = module.get<ModeloController>(ModeloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
